import { Request, Response, NextFunction } from 'express';
import { adminAuth } from '../lib/firebase-admin.ts';
import { DecodedIdToken } from 'firebase-admin/auth';

export type UserRole = 'student' | 'instructor' | 'admin';

export interface AuthRequest extends Request {
  user?: DecodedIdToken;
  userRole?: UserRole;
}

export type AuthenticatedRequest = AuthRequest;

/**
 * Parses the server-side administrator email allowlist from environment configuration.
 * Never uses hardcoded personal emails or email substring matching.
 */
export function getConfiguredAdminAllowlist(): Set<string> {
  const rawAllowlist = process.env.ADMIN_ALLOWLIST_EMAILS || '';
  return new Set(
    rawAllowlist
      .split(',')
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean)
  );
}

/**
 * Trusted administrator verification:
 * 1. Explicit Firebase custom claim `admin === true` or `role === 'admin'`
 * 2. Exact email match in server-side ADMIN_ALLOWLIST_EMAILS when `email_verified === true`
 *    (strictly boolean true; unverified or missing email_verified claims are rejected).
 */
export function isTrustedAdminUser(decodedToken?: DecodedIdToken): boolean {
  if (!decodedToken) return false;
  if (decodedToken.admin === true || decodedToken.role === 'admin') {
    return true;
  }

  const allowlist = getConfiguredAdminAllowlist();
  if (allowlist.size === 0) return false;

  const normalizedEmail = (decodedToken.email || '').trim().toLowerCase();
  if (!normalizedEmail) return false;

  const isStrictlyVerified = decodedToken.email_verified === true;
  return isStrictlyVerified && allowlist.has(normalizedEmail);
}

/**
 * Determines the authoritative role for an authenticated token.
 */
export function resolveTokenRole(decodedToken?: DecodedIdToken): UserRole {
  if (!decodedToken) return 'student';
  if (isTrustedAdminUser(decodedToken)) return 'admin';
  if (decodedToken.role === 'instructor' || decodedToken.instructor === true) {
    return 'instructor';
  }
  return 'student';
}

export const requireAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }

  const token = authHeader.split('Bearer ')[1]?.trim();
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Empty token' });
  }

  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    req.user = decodedToken;
    req.userRole = resolveTokenRole(decodedToken);
    next();
  } catch {
    return res.status(401).json({ error: 'Unauthorized: Invalid or expired token' });
  }
};

/**
 * Reusable role-based authorization middleware enforcing server-side RBAC.
 */
export function requireRole(...allowedRoles: UserRole[]) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized: Authentication required' });
    }
    const effectiveRole = req.userRole || resolveTokenRole(req.user);
    if (!allowedRoles.includes(effectiveRole)) {
      return res.status(403).json({
        error: `Forbidden: Requires ${allowedRoles.join(' or ')} privileges.`,
      });
    }
    next();
  };
}

export const requireAdmin = requireRole('admin');
