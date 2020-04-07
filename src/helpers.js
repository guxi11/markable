/**
 * Helpers
 */

const caret = /(^|[^\[])\^/g;
function edit(regex) {
  regex = regex.source || regex;
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex);
    }
  };
  return obj;
}

module.exports = {
  edit
};
