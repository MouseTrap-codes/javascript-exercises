const removeFromArray = function(arr, ...toRemove) {
    for (let element of toRemove) {
        while (arr.indexOf(element) !== -1) {
            arr.splice(arr.indexOf(element), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
