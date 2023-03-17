/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const sa = sentence.split(" ");

  for (let i = 0; i < sa.length; i++) {
    const fl = sa[i];
    const sl = sa[i + 1] || sa[0];
    if (fl[fl.length - 1] !== sl[0]) return false;
  }

  return true;
};
