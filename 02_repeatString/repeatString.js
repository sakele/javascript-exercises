const repeatString = function(string, num) {
    let returnString = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (let i = num; i > 0; i--) {
        returnString += string;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
