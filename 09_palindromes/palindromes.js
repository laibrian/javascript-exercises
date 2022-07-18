const palindromes = function (str) {
    let cleanedStr = "";    // store expected string (after cleaned original string)
    let lowerCaseStr = str.toLowerCase();   // change cleanedStr to lower case

    // clean string (remove spaces and punctuation)
    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (lowerCaseStr[i] === " " || lowerCaseStr[i] === "." || lowerCaseStr[i] === "!" ||
            lowerCaseStr[i] === ",") 
        continue;
        cleanedStr += lowerCaseStr[i];
    }
    
    // reverse cleaned string
    let reversedStr = "";
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i];
    }

    // check if reversed, cleaned string is the same as cleaned original string
    return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
