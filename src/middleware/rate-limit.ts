import type { Request, Response, NextFunction } from 'express';
import type { AuthenticatedRequest } from './auth.ts';

interface RateBucket {
  count: number;
  resetAt: number;
}

const ipBuckets = new Map<string, RateBucket>();
const userBuckets = new Map<string, RateBucket>();

export function resetRateLimitBuckets() {
  ipBuckets.clear();
  userBuckets.clear();
}

/**
 * Extracts client IP using Express's configured trust proxy policy (`req.ip`)
 * or socket remoteAddress rather than trusting unvalidated X-Forwarded-For headers.
 */
export function resolveClientIp(req: Request): string {
  if (req.ip && req.ip.trim().length > 0) {
    return req.ip.trim();
  }
  return req.socket?.remoteAddress || 'unknown-ip';
}

export function createRateLimiter(options: {
  windowMs: number;
  maxPerIp: number;
  maxPerUser?: number;
  keyPrefix?: string;
}) {
  const { windowMs, maxPerIp, maxPerUser, keyPrefix = 'global' } = options;

  return (req: Request, res: Response, next: NextFunction) => {
    const now = Date.now();
    const clientIp = resolveClientIp(req);
    const ipKey = `${keyPrefix}:ip:${clientIp}`;

    const ipEntry = ipBuckets.get(ipKey);
    if (!ipEntry || now > ipEntry.resetAt) {
      ipBuckets.set(ipKey, { count: 1, resetAt: now + windowMs });
    } else {
      ipEntry.count += 1;
      if (ipEntry.count > maxPerIp) {
        const retryAfterSec = Math.max(1, Math.ceil((ipEntry.resetAt - now) / 1000));
        res.setHeader('Retry-After', String(retryAfterSec));
        return res.status(429).json({
          error: 'Too many requests from this IP address. Please wait before trying again.',
          retryAfterSeconds: retryAfterSec,
        });
      }
    }

    const authReq = req as AuthenticatedRequest;
    if (maxPerUser && authReq.user?.uid) {
      const userKey = `${keyPrefix}:uid:${authReq.user.uid}`;
      const userEntry = userBuckets.get(userKey);
      if (!userEntry || now > userEntry.resetAt) {
        userBuckets.set(userKey, { count: 1, resetAt: now + windowMs });
      } else {
        userEntry.count += 1;
        if (userEntry.count > maxPerUser) {
          const retryAfterSec = Math.max(1, Math.ceil((userEntry.resetAt - now) / 1000));
          res.setHeader('Retry-After', String(retryAfterSec));
          return res.status(429).json({
            error: 'Per-user request rate limit exceeded. Please wait before sending more requests.',
            retryAfterSeconds: retryAfterSec,
          });
        }
      }
    }

    next();
  };
}
