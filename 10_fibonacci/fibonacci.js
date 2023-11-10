const fibonacci = function(count) {
    count = Number(count);
    if (count < 0) return 'OOPS' ;
    if (count === 0) return 0;
    if (count === 1) return 1;
    
    let minusOne = 1;
    let minusTwo = 0;
    let current = 0;

    for (let i = 2; i <= count; i++) {
        current = minusOne + minusTwo;
        minusTwo = minusOne;
        minusOne = current;
    }
    return current;

};

// Do not edit below this line
module.exports = fibonacci;
