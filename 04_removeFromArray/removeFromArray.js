const removeFromArray = function(array, val) {
    let finalArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === val) {
            finalArray = array.concat(array[i]);
        }
        return finalArray;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
