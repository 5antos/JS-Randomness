/**
 * @author atshushi#0101
 * @returns {string} after pass to jaden case
 */

function toJadenCase(content) {
  return content.replace(/(^|\s)[a-z]/g, (content) => content.toUpperCase());
}

toJadenCase('i love cats'); // returns I Love Cats
