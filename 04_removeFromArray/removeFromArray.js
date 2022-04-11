const removeFromArray = function(arr, ...arg) {
    for (let i = 0; i < arg.length; i++) {
        let loopValue = arg[i];
        if (arr.includes(loopValue)){
            for (let j = 0; j < arr.length; j++) {
                if(arr[j] === loopValue){
                    arr.splice(j, 1);
                };
                
            }
        }
        
    } return arr;


};



removeFromArray([1,2,3,4], 1, 2, 3)

// Do not edit below this line
module.exports = removeFromArray;
