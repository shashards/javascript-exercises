const reverseString = function(str) {
    const strArray = str.split("");
    strArray.reverse();
    const newStr = strArray.join("");
    return newStr;
};

reverseString("Shane Shardlow")

// Do not edit below this line
module.exports = reverseString;
