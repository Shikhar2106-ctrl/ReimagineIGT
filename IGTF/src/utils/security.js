/**
 * Client-side Security, Rate Limiting & Throttling Utility
 * Protects forms, CTA triggers, and API endpoints from spam, rapid clicks, and DoS attacks.
 */

// In-memory rate limiting cache
const rateLimitCache = new Map();

/**
 * Sliding Window Token Bucket Rate Limiter
 * @param {string} key - Unique key for rate limit scope (e.g. 'contact_form')
 * @param {number} maxRequests - Max allowed requests within window
 * @param {number} windowMs - Time window in milliseconds (e.g. 60000 for 1 min)
 * @returns {{ allowed: boolean, resetTimeMs: number, remaining: number }}
 */
export function checkRateLimit(key, maxRequests = 3, windowMs = 300000) {
  const now = Date.now();
  let record = rateLimitCache.get(key);

  // If no record or window expired, initialize new window
  if (!record || now - record.startTime > windowMs) {
    record = {
      startTime: now,
      count: 1,
    };
    rateLimitCache.set(key, record);
    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetTimeMs: windowMs,
    };
  }

  // If within window and count exceeds limit
  if (record.count >= maxRequests) {
    const timeRemaining = windowMs - (now - record.startTime);
    return {
      allowed: false,
      remaining: 0,
      resetTimeMs: Math.max(0, timeRemaining),
    };
  }

  // Increment request count
  record.count += 1;
  rateLimitCache.set(key, record);

  return {
    allowed: true,
    remaining: maxRequests - record.count,
    resetTimeMs: windowMs - (now - record.startTime),
  };
}

/**
 * XSS & Malicious Input Sanitizer
 * Strips script tags, HTML entities, and malicious URI schemes
 * @param {string} input - User input string
 * @returns {string} - Sanitized clean string
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove <script> tags
    .replace(/<[^>]+>/g, '') // Remove all HTML tags
    .replace(/javascript:/gi, '') // Strip javascript: URIs
    .replace(/onload=/gi, '') // Strip inline event handlers
    .replace(/onerror=/gi, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
