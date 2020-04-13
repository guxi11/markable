const { inline } = require('./rules.js');

/**
 * InlineTranslator
 */
module.exports = class InlineTranslator {
  constructor() {
    this.rules = inline;
  }

  static translate(src) {
    const translator = new InlineTranslator();
    return translator.translate(src);
  }

  translate(src) {
    let dest = '',
        cap,
        left,
        right;

    while(src) {

      // link
      if (cap = this.rules.link.exec(src)) {
        src = src.substring(cap[0].length);
        left = cap[0].substring(0, cap[0].indexOf(cap[1]))
          .replace(/！/, '!')
          .replace(/【/, '[');
        right = cap[0].substring(cap[0].indexOf(cap[1]) + cap[1].length)
          .replace(/】/, ']')
          .replace(/（/, '(')
          .replace(/）/, ')')
          .replace(/[“”]/g, '"');
        dest += left + this.translate(cap[1]) + right;
        continue;
      }

      // reflink
      if (cap = this.rules.reflink.exec(src)) {
        src = src.substring(cap[0].length);
        left = cap[0].substring(0, cap[0].indexOf(cap[1]))
          .replace(/【/, '[')
        right = cap[0].substring(cap[0].indexOf(cap[1]) + cap[1].length)
          .replace(/【/, '[')
          .replace(/】/g, ']');
        dest += left + this.translate(cap[1]) + right;
        continue;
      }

      // linkdefinition
      if (cap = this.rules.linkdefinition.exec(src)) {
        src = src.substring(cap[0].length);
        dest += cap[0]
          .replace(/【/, '[')
          .replace(/】/, ']')
          .replace(/：/, ':')
          .replace(/[“”]/g, '"');
        continue;
      }

      // code
      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        dest += cap[0]
          .replace(/·/g, '`');
        continue;
      }

      // text
      if (cap = this.rules.text.exec(src)) {
        src = src.substring(cap[0].length);
        dest += cap[0];
        continue;
      }
    }

    return dest;
  }
}