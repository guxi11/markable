/**
 * Markable
 */
function markable(text) {
  // throw error in case of non string input
  if (typeof text === 'undefined' || text === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof text !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(text) + ', string expected');
  }

  return text.replace(/》 /g, "> ").replace(/···/g, "```");
};

/**
 * Expose
 */
// AMD Loader
if (typeof define === 'function' && define.amd) {
  define(function () {
    'use strict';
    return markable;
  });
}
// CommonJS/nodeJS Loader
else if (typeof module !== 'undefined' && module.exports) {
  module.exports = markable;
}
// Regular Browser loader
else {
  this.markable = markable;
}