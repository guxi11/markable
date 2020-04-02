module.exports = function markable(text) {
  if (typeof text !== "string") throw new TypeError("Markable wants a string!");
  return text.replace(/》 /g, "> ").replace(/···/g, "```");
};