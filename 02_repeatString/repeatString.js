const repeatString = function(str, numOfRepeats) {
    let newStr = '';
    if (!(numOfRepeats < 0))  {
        for (let i = 0; i < numOfRepeats; i++) {
            newStr += str;
        }
        return newStr;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
