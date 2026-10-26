import { Request, Response, NextFunction } from 'express';
import { adminAuth } from '../lib/firebase-admin.ts';
import { DecodedIdToken } from 'firebase-admin/auth';

export interface AuthRequest extends Request {
  user?: DecodedIdToken;
}

export type AuthenticatedRequest = AuthRequest;

/**
 * Trusted administrator verification:
 * 1. Explicit Firebase custom claim `admin === true` or `role === 'admin'`
 * 2. Exact email match in server-side ADMIN_ALLOWLIST_EMAILS (with verified email),
 *    never substring matching like email.includes('admin').
 */
export function isTrustedAdminUser(decodedToken?: DecodedIdToken): boolean {
  if (!decodedToken) return false;
  if (decodedToken.admin === true || decodedToken.role === 'admin') {
    return true;
  }

  const rawAllowlist = process.env.ADMIN_ALLOWLIST_EMAILS || 'babbshergill73@gmail.com';
  const allowlist = new Set(
    rawAllowlist
      .split(',')
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean)
  );

  const normalizedEmail = (decodedToken.email || '').trim().toLowerCase();
  if (!normalizedEmail) return false;

  const isEmailVerified = decodedToken.email_verified !== false;
  return isEmailVerified && allowlist.has(normalizedEmail);
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
    next();
  } catch (error) {
    console.error('Error verifying Firebase ID token:', error);
    return res.status(401).json({ error: 'Unauthorized: Invalid or expired token' });
  }
};

export const requireAdmin = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized: Authentication required' });
  }

  if (!isTrustedAdminUser(req.user)) {
    return res.status(403).json({
      error: 'Forbidden: Administrator privileges required for syllabus management.',
    });
  }

  next();
};
