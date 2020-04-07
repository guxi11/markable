const { inline } = require('./rules.js');

/**
 * InlineTranslator
 */
module.exports = class InlineTranslator {
  constructor() {
    this.rules = inline;
    this.dest = '';
  }

  static translate(src) {
    const translator = new InlineTranslator();
    return translator.translate(src);
  }

  translate(src) {
    let cap;

    while(src) {

      // link
      if (cap = this.rules.link.exec(src)) {
        src = src.substring(cap[0].length);
        this.dest += cap[0]
          .replace(/！/, '!')
          .replace(/【/, '[')
          .replace(/】/, ']')
          .replace(/（/, '(')
          .replace(/）/, ')')
          .replace(/[“”]/g, '"');
        continue;
      }

      // code
      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        this.dest += cap[0]
          .replace(/·/g, '`');
        continue;
      }

      // text
      if (cap = this.rules.text.exec(src)) {
        src = src.substring(cap[0].length);
        this.dest += cap[0];
        continue;
      }
    }

    return this.dest;
  }
}