/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  let result = "";
  for (let i = 0; i < dictionary.length; i++) {
    const word = dictionary[i];
    const wlen = word.length;
    const slen = s.length;
    let ti = 0,
      tc = 0;
    for (let j = 0; j < slen; j++) {
      if (wlen > slen || ti >= word.length) continue;
      if (word[ti] === s[j]) {
        tc++;
        ti++;
      }
    }
    if (tc === wlen && wlen > result.length) {
      result = word;
    } else if (tc === wlen && wlen === result.length && word < result) {
      result = word;
    }
  }
  return result;
};
