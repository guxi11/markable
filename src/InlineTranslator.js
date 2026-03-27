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
          .replace(/[\u201c\u201d]/g, '"')
          .replace(/[\u2018\u2019]/g, "'");
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
          .replace(/[\u201c\u201d]/g, '"')
          .replace(/[\u2018\u2019]/g, "'");
        continue;
      }

      // strong (bold)
      if (cap = this.rules.strong.exec(src)) {
        src = src.substring(cap[0].length);
        let inner = cap[1] || cap[2];
        let marker = cap[1] ? '**' : '__';
        dest += marker + this.translate(inner) + marker;
        continue;
      }

      // em (italic)
      if (cap = this.rules.em.exec(src)) {
        src = src.substring(cap[0].length);
        let inner = cap[1] || cap[2];
        let marker = cap[1] ? '*' : '_';
        dest += marker + this.translate(inner) + marker;
        continue;
      }

      // strikethrough
      if (cap = this.rules.strikethrough.exec(src)) {
        src = src.substring(cap[0].length);
        dest += '~~' + this.translate(cap[1]) + '~~';
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
