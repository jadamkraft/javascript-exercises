const fibonacci = function(num) {
    let newNum = parseInt(num);
    if (newNum < 1) {
        return "OOPS";
    } else {
    let valLeft = 0;
    let valRight = 1;
    let newValue = 0;
    for (let i = 0; i < num - 1; i++) {
        newValue = valLeft + valRight;
        valLeft = valRight;
        valRight = newValue;
    };
    return valRight;
    };
};

// Do not edit below this line
module.exports = fibonacci;
