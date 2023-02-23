/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  const dpmap = {};

  difficulty.forEach((d, i) => {
    if (dpmap[d]) {
      dpmap[d] = dpmap[d] > profit[i] ? dpmap[d] : profit[i];
    } else {
      dpmap[d] = profit[i];
    }
  });

  difficulty.sort((a, b) => dpmap[b] - dpmap[a]);

  let amount = 0;

  worker.forEach((w) => {
    for (let i = 0; i < difficulty.length; i++) {
      if (w >= difficulty[i]) {
        amount += dpmap[difficulty[i]];
        break;
      }
    }
  });

  return amount;
};
