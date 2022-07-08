/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */

//  Solution: 1

let solution1 = (sx, sy, tx, ty) => {
    console.log(sx, sy)

    if (sx > tx || sy > ty) {
        return false
    }

    if (sx === tx && sy === ty) {
        return true
    }


    return solution1(sx + sy, sy, tx, ty) || solution1(sx, sy + sx, tx, ty)
}

var reachingPoints = function (sx, sy, tx, ty) {
    console.log(solution1(sx, sy, tx, ty))
};


//  Solution: 2


var reachingPoints = function (sx, sy, tx, ty) {
    while(tx > sx && ty > sy){
        if(tx > ty){
           tx %= ty;
        }else ty %= tx;
     }

     const ans = (sx == tx && sy <= ty && (ty - sy) % tx == 0) || (sy == ty && tx >= sx && (tx - sx) % ty == 0);
     return ans
};

reachingPoints(2,4,15,9) // false
reachingPoints(1,1,1,1) // true
reachingPoints(1,1,2,2) // false
reachingPoints(1,1,3,5) // true
reachingPoints(1,1,4,5) // true
reachingPoints(9,10,9,19) // true
reachingPoints(35,13,455955547,420098884)
