/**
 * Block-Level Grammar
 * Supported Languages: Chinese
 */
const block = {
  newline: /^\n+/,
  fences: /^ {0,3}([·]{3,}(?=[^\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~·]* *(?:\n+|$)|$)/,
  blockquote: /^( {0,3}[》] ?([^\n]*)(?:\n|$))+/,
  text: /^[^\n]+/
};

module.exports = {
  block
};
