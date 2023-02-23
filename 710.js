/**
 * @param {number} n
 * @param {number[]} blacklist
 */

//  Solution: 1

var Solution = function (n, blacklist) {
    this.blackSet = new Set(blacklist)
    this.n = n
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
    let result = Math.floor(Math.random() * this.n)
    while (this.blackSet.has(result)) {
        result = Math.floor(Math.random() * this.n)
    }
    return result
};

//  Solution: 2

var Solution = function (n, blacklist) {
    this.blacklist = blacklist
    this.n = n
    this.blacklist.sort()
    this.randomInt = (num) => {
        return Math.floor(Math.random() * num)
    }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
    let k = this.randomInt(this.n);
    let lo = 0, hi = this.blacklist.length - 1;

    while(lo < hi) {
        let mi = lo + (hi - lo) / 2 + 1;
        if (this.blacklist[mi] - mi > k) hi = mi - 1;
        else lo = mi;
    }

    return lo == hi && this.blacklist[lo] - lo <= k ? hi + k + 1 : k;
};


/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
var obj = new Solution(7, [2, 3, 5])
var param_1 = obj.pick()
console.log(param_1)