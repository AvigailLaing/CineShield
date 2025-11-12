//Server-side sanitization using DOMPurify for input cleaning and JSDOM
const { JSDOM } = require("jsdom");
const createDOMPurify = require("dompurify");

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

function sanitizeHTML(input) {
  return DOMPurify.sanitize(String(input), {
    ALLOWED_TAGS: [], // keep comments plain text
    ALLOWED_ATTR: []
  });
}

module.exports = { sanitizeHTML };