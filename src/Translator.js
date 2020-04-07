const { block } = require('./rules.js');
const InlineTranslator = require('./InlineTranslator.js');

/**
 * Block Translator
 */
module.exports = class Translator {
  constructor() {
    this.rules = block;
    this.dest = '';
    this.inlineTranslator = new InlineTranslator();
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

    let cap;

    while(src) {
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
      }

      // blockquote
      if (cap = this.rules.blockquote.exec(src)) {
        src = src.substring(cap[0].length);
        this.dest += this.inlineTranslator.translate(cap[0])
          .replace(/[》〉]/g, '>');
      }

      // text
      if (cap = this.rules.text.exec(src)) {
        src = src.substring(cap[0].length);
        this.dest += this.inlineTranslator.translate(cap[0]);
      }
    }

    return this.dest;
  }
}