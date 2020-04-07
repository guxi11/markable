const Translator = require('./Translator.js');

/**
 * Markable
 */
function markable(src) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('markable(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('markable(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  return Translator.translate(src);
};

/**
 * Expose
 */
module.exports = markable;
