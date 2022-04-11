const sumAll = function(a, b) {
    //Change Arguments into Array
    let argArray = Array.from(arguments);
    //Set High and Low Value
    argArray.sort(function(a, b){return a-b});
    let low = argArray[0];
    let high = argArray[1];
    //Create Variables
    let finalSum = 0;
    let range = [];
    //push highest value into Range Array
    range.push(high);
    // loop through all the values from low up to high, and unshifting them into the array
    for (let i = low; i < high; i++) {
        range.unshift(i)
    }
    // sort the array from low to high values
    range.sort(function(low, high){return low-high})
    // loop through range array adding values to finalSum
    for (let j = 0; j < range.length; j++) {
        finalSum += range[j];    
    }


    
    return finalSum;
};

sumAll(1, 4000)

// Do not edit below this line
module.exports = sumAll;
