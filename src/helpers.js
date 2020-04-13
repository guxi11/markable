/**
 * Helpers
 */

const caret = /(^|[^\[])\^/g;
function edit(regex) {
  regex = regex.source;
  const obj = {
    replace: (name, val) => {
      val = val.source;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    replaceAllByDict: (dict) => {
      for (let key in dict) {
        let name = key, val = dict[key];
        val = val.source;
        val = val.replace(caret, '$1');
        regex = regex.replace(RegExp(name, 'g'), val);
      }
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
