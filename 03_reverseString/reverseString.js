const reverseString = function(str) {
    let reversedStr = '';
    for (let i = str.length; i > 0; i--)  {
        let currentChar = str.slice(i-1, i);
        reversedStr += currentChar;
    }
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
