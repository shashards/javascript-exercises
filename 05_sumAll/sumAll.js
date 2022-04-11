const sumAll = function(a, b) {
    //Change Arguments into Array
    let argArray = Array.from(arguments);
    //loop through argArray and check for negative numbers
    let arrCheck = false;
    for (let i = 0; i < argArray.length; i++) {
        if(negValueCheck(argArray[i])){
            arrCheck = true
        } else {
            arrCheck = false
            break
        }
    };
    if(arrCheck == true){
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
        console.log(finalSum);
        return finalSum;    
    } else {
            console.log("ERROR")
            return "ERROR";
            }
        function negValueCheck(v){
        if(v < 1){
            return false;
        } else { 
            if(typeof v === "number"){
                return true;
            } else {
                return false;
            }
        } 
    }
};
sumAll(5, 10);



// Do not edit below this line
module.exports = sumAll;
