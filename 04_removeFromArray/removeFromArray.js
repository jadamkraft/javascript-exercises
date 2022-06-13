const removeFromArray = function(array, val) {
    let finalArray = [];
    let countLength = array.length;
    for (let i = 0; i < countLength; i++) {
        if (array[i] === val) {
        array.splice(i, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
