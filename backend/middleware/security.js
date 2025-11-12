/**
 * Content Security Policy (CSP) middleware for Express
 * 
 * This middleware function sets strict Content Security Policy headers to protect against
 * XSS attacks, clickjacking, and other injection vulnerabilities. The policy restricts
 * resource loading to same-origin only, disables plugins, and upgrades insecure requests.
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {void}
 */

const csp = (req, res, next) => {
  const policy = [
    "default-src 'self'",
    "script-src 'self'",
    "style-src 'self'",
    "img-src 'self' data:",
    "font-src 'self'",
    "media-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join("; ");
  res.setHeader("Content-Security-Policy", policy);
  next();
};

const otherHeaders = (req, res, next) => {
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("Permissions-Policy", "geolocation=()");
  next();
};

module.exports = { csp, otherHeaders };