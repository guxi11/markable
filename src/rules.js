const { edit } = require('./helpers.js');
const symbols = require('./symbols.js');

/**
 * Block-Level Grammar
 */
const block = {
  newline: /^\n+/,
  heading: /^ {0,3}([=#=]{1,6})(?:\s|$)(([^\n]*)(?:\n|$))/,
  fences: /^ {0,3}([=`=]{3,}(?=[^\n]*\n)|[=~=]{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[=`=]* *(?:\n+|$)|$)/,
  hr: /^ {0,3}([-\uff0d]{3,}|[=*=]{3,}|[=_=]{3,}) *(?:\n+|$)/,
  blockquote: /^ {0,3}[=>=]+(([^\n]*)(?:\n|$))/,
  listquote: /^ *bull ?blockquote/,
  table: /^ *([\|｜].+)\n *([\|｜][ ]*[=:=]?[-\uff0d]+[=:=]?[ ]*)+[\|｜]?[ ]*(?:\n((?:.*[\|｜].*(?:\n|$))*)\n*|$)/,
  text: /^[^\n]+/
};

block.bullet = /(?:[=*=+]|[-\uff0d]|\d{1,9}[=\.=])/;
block.listquote = edit(block.listquote)
  .replace('bull', block.bullet)
  .replace('blockquote', block.blockquote)
  .getRegex();

/**
 * Inline-Level Grammar
 */
const inline = {
  link: /^[=!=]?[=\[=](label)[=\]=][=\(=]\s*(href)(?:\s+(title))?\s*[=\)=]/,
  reflink: /^[=!=]?[=\[=](label)[=\]=][=\[=](id)[=\]=]/,
  linkdefinition: /^[=\[=](id)[=\]=][=:=]\s*(href)(?:\s+(title))?/,
  strong: /^[=*=]{2}((?:[^=*=]|[=*=](?![=*=]))+)[=*=]{2}|^[=_=]{2}((?:[^=_=]|[=_=](?![=_=]))+)[=_=]{2}/,
  em: /^[=*=]((?:[^=*=])+)[=*=]|^[=_=]((?:[^=_=])+)[=_=]/,
  strikethrough: /^[=~=]{2}((?:[^=~=]|[=~=](?![=~=]))+)[=~=]{2}/,
  code: /^([=`=]+)([^=`=]|[^=`=][\s\S]*?[^=`=])\1(?![=`=])/,
  text: /^([=`=]+|[^=`=])(?:[\s\S]*?(?:(?=[\\<!=\[==`=*\uff0a~\uff5e]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
};

inline._label = /(?:[=\[=][^=\[==\]=]*[=\]=]|\\.|[=`=][^=`=]*[=`=]|[^=\[==\]=\\=`=])*?/;
inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
inline._title = /[="=](?:\\[="=]?|[^="=\\])*[="=]|[='=](?:\\[='=]?|[^='=\\])*[='=]|[=\(=](?:\\[=\)=]?|[^)\\])*[=\)=]/;
inline._id = /(?!\s*[=\]=])((?:\\[=\[==\]=]?|[^=\[==\]=\\])+)/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .replace('id', inline._id)
  .getRegex();

inline.linkdefinition = edit(inline.linkdefinition)
  .replace('id', inline._id)
  .replace('href', inline._href)
  .replace('title', inline._title)
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
