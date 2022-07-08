/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
 var groupThePeople = function(groupSizes) {
    let groupMap = {}
    let result = []
    
    groupSizes.forEach((size, index) => {
        if (size in groupMap) {
            if (groupMap[size].length < size) {
                groupMap[size].push(index)
            }
        } else {
            groupMap[size] = [index]
        }

        if (groupMap[size].length === size) {
            result.push(groupMap[size])
            groupMap[size] = []
        }
    })

    return result
};

const ans = groupThePeople([3,3,3,3,3,1,3])

console.log(ans)
