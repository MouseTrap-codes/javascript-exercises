const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    }

    if (a < 0 || b < 0) {
        return "ERROR";
    }

    if (Math.floor(a) !== a || Math.floor(b) !== b) {
        return "ERROR";
    }

    let sum = 0;
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
