/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort()
    const results = []
    for (let i = 0; i < searchWord.length; i++) {
        const arr = products.filter(p => p.indexOf(searchWord.substr(0, i+1)) === 0)
        if (arr.length > 3) {
            results[i] = arr.slice(0,3)
        } else {
            results[i] = arr
        }
    }
    return results
};
