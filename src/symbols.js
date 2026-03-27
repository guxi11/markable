/**
 * Symbols
 * Supported Languages: Chinese
 *
 * Keys are regex patterns used to match placeholders in rules.js source.
 * Special regex chars in keys must be escaped (e.g. =\\*= for literal =*=).
 */
const symbols = {
  '=`=': /`·/,
  '=~=': /~～/,
  '=\\*=': /\*＊/,
  '=#=': /#＃/,
  '={=': /「/,
  '=}=': /」/,
  '=<=': /<《〈/,
  '=>=': />》〉/,
  '=:=': /:：/,
  '=!=': /!！/,
  '=_=': /_——/,
  '=\\$=': /\$¥/,
  '=\\-=': /\-－/,
  '=\\+=': /\+＋/,
  '="=': /"\u201c\u201d/,
  "='=": /'\u2018\u2019/,
  '=\\\\\\[=': /\[【/,
  '=\\\\\\]=': /\]】/,
  '=\\\\\\(=': /\(（/,
  '=\\\\\\)=': /\)）/,
  '=\\\\\\|=': /\|｜/,
  '=\\\\\\.=': /\.。/
}

module.exports = symbols;
