/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  const counter = {};
  words1.forEach((word) => {
    if (counter[word]) {
      counter[word] = counter[word] + 1;
    } else {
      counter[word] = 1;
    }
  });

  words2.forEach((word) => {
    if (counter[word] && counter[word] < 2) {
      counter[word] = counter[word] - 1;
    } else {
      counter[word] = -1;
    }
  });

  let result = 0;

  Object.keys(counter).forEach((key) => {
    if (counter[key] === 0) result += 1;
  });

  return result;
};
