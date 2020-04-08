const { edit } = require('./helpers.js');
const symbols = require('./symbols.js');

/**
 * Block-Level Grammar
 */
const block = {
  newline: /^\n+/,
  fences: /^ {0,3}([=`=]{3,}(?=[^\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[=`=]* *(?:\n+|$)|$)/,
  blockquote: /^( {0,3}[=>=] ?(paragraph|[^\n]*)(?:\n|$))+/,
  _paragraph: /^([^\n]+(?:\n(?!blockquote)[^\n]+)*)/,
  text: /^[^\n]+/
};

block.paragraph = edit(block._paragraph)
  .replace('blockquote', ' {0,3}>')
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Inline-Level Grammar
 */
const inline = {
  link: /^[=!=]?[=\[=](label)[=\]=][=\(=]\s*(href)(?:\s+(title))?\s*[=\)=]/,
  reflink: /^[=!=]?[=\[=](label)[=\]=][=\[=](?!\s*[=\]=])((?:\\[=\[==\]=]?|[^=\[==\]=\\])+)[=\]=]/,
  nolink: /^[=!=]?[=\[=](?!\s*[=\]=])((?:[=\[=][^=\[==\]=]*[=\]=]|\\[=\[==\]=]|[^=\[==\]=])*)[=\]=](?:[=\[=][=\]=])?/,
  code: /^([=`=]+)([^=`=]|[^=`=][\s\S]*?[^=`=])\1(?![=`=])/,
  text: /^([=`=]+|[^=`=])(?:[\s\S]*?(?:(?=[\\<!=\[==`=*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
};

inline._label = /(?:[=\[=][^=\[==\]=]*[=\]=]|\\.|[=`=][^=`=]*[=`=]|[^=\[==\]=\\=`=])*?/;
inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
inline._title = /[="=](?:\\[="=]?|[^="=\\])*[="=]|[='=](?:\\[='=]?|[^='=\\])*[='=]|[=\(=](?:\\[=\)=]?|[^)\\])*[=\)=]/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .getRegex();

/**
 * Grammar Translate Symbols
 */
[block, inline].map(grammer => {
  for (let key in grammer) {
    grammer[key] = edit(grammer[key])
      .replaceAllByDict(symbols)
      .getRegex();
  }
})

module.exports = {
  block,
  inline
};
