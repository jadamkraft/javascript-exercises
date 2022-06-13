const sumAll = function(first, last) {
    let numArray = [];
    let finalSum = 0;
        if (typeof first !== 'number' || typeof last !== 'number') {
            return 'ERROR';
        } else if (first < 0 || last < 0) {
            return 'ERROR';
        } else if (first > last) {
            for (i = first; i >= last; i--) {
                numArray.unshift(i);
            }
        } else if (first < last) {
            for (i = first; i <= last; i++) {
                numArray.push(i);
            }
        }
        numArray.forEach(function(num) {
            finalSum += num; 
        });
        return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
