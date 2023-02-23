/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let i = 0;

  while (i < intervals.length - 1) {
    loops: for (i = 0; i < intervals.length; i++) {
      for (let j = i + 1; j < intervals.length; j++) {
        const ij = [
          intervals[i][0],
          intervals[i][1],
          intervals[j][0],
          intervals[j][1],
        ];
        if (isOverlap(...ij)) {
          intervals.splice(j, 1);
          intervals.splice(i, 1);
          intervals.unshift([Math.min(...ij), Math.max(...ij)]);
          break loops;
        }
      }
    }
  }

  return intervals;
};

var isOverlap = (s1, e1, s2, e2) => {
  if (s1 > s2) {
    return e2 >= s1;
  } else {
    return e1 >= s2;
  }
};
