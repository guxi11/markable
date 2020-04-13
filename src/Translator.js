const { block } = require('./rules.js');
const InlineTranslator = require('./InlineTranslator.js');

/**
 * Block Translator
 */
module.exports = class Translator {
  constructor() {
    this.rules = block;
    this.dest = '';
  }

  static translate(src) {
    const translator = new Translator();
    return translator.translate(src);
  }

  translate(src) {
    // preprocessing
    src = src
      .replace(/\r\n|\r/g, '\n')
      .replace(/\t/g, '    ');

    let cap,
        left;

    while(src) {
      console.log(src)
      // newline
      if (cap = this.rules.newline.exec(src)) {
        src = src.substring(cap[0].length);
        this.dest += cap[0];
      }

      // fences
      if (cap = this.rules.fences.exec(src)) {
        src = src.substring(cap[0].length);
        this.dest += cap[0]
          .replace(/[·]{3}/g, '```');
        continue;
      }

      // blockquote or listquote
      if (cap = this.rules.blockquote.exec(src) || this.rules.listquote.exec(src)) {
        src = src.substring(cap[0].length);
        left = cap[0].substring(0, cap[0].indexOf(cap[1]))
          .replace(/[》〉]/g, '>');
        this.dest += left + InlineTranslator.translate(cap[1]);
        continue;
      }

      // text
      if (cap = this.rules.text.exec(src)) {
        console.log(cap)
        src = src.substring(cap[0].length);
        this.dest += InlineTranslator.translate(cap[0]);
      }
    }

    return this.dest;
  }
}