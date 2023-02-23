/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  let bs = "";
  const counter = {};
  s.split("").forEach((c) => (counter[c] = counter[c] ? counter[c] + 1 : 1));
  console.log(counter);
  let sortedChar = Object.keys(counter).sort();
  while (bs.length != s.length) {
    sortedChar.forEach((c) => {
      if (counter[c] > 0) {
        bs += c;
        counter[c] -= 1;
      }
    });
    for (let i = sortedChar.length - 1; i >= 0; i--) {
      if (counter[sortedChar[i]] > 0) {
        bs += sortedChar[i];
        counter[sortedChar[i]] -= 1;
      }
    }
  }
  return bs;
};
