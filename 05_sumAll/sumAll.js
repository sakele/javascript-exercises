const sumAll = function(a, b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || a < 0 || b < 0) {
        return 'ERROR';
    }
    let sum = 0;
    let i = min = Math.min(a, b);
    let max = Math.max(a, b);
    while (i <= max) {
        sum += i;
        i++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
