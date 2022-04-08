const removeFromArray = function(arr, arg) {
    let checkNum = (i) => {
        return arg != i

    }  
    const newArr = arr.filter(checkNum)
    
    let argArr = Array.from(arguments);
    argArr.shift();

    console.log(newArr);
    return newArr


};



removeFromArray([1,2,3,4], 4)

// Do not edit below this line
module.exports = removeFromArray;
