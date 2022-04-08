const reverseString = function(str) {
    const strArray = str.split("");
    strArray.reverse();
    const newStr = strArray.join("");
    return newStr;
};

reverseString("Hello Hello")

// Do not edit below this line
module.exports = reverseString;
