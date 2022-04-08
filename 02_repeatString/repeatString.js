const repeatString = function(str, num) {
    let newStr = "";
    for (let i = 0; i < num; i++) {
        newStr = newStr.concat(str);
    }
    return newStr
};

repeatString("Hey", 3)

// Do not edit below this line
module.exports = repeatString;
