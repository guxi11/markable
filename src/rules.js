const { edit } = require('./helpers.js');
const symbols = require('./symbols.js');

/**
 * Block-Level Grammar
 */
const block = {
  newline: /^\n+/,
  fences: /^ {0,3}(=`={3,}(?=[^\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1=`=* *(?:\n+|$)|$)/,
  blockquote: /^( {0,3}=>= ?([^\n]*)(?:\n|$))+/,
  text: /^[^\n]+/
};

block.fences = edit(block.fences)
  .replace(/=`=/g, symbols['=`='])
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace(/=>=/g, symbols['=>='])
  .getRegex();

module.exports = {
  block
};
