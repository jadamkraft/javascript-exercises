let palArray = [];
const palindromes = function (pal) {
    pal = pal.toLowerCase();
    pal = pal.replace(/[^\w\s']|_/g, "");
    pal = pal.replace(/\s/g, "");
    for (let i = 0; i < pal.length; i++) {
    palArray.push(pal[i]);
    };
    let test = true;
    let arrLength = palArray.length;
    for (let j = 0; j < arrLength / 2; j++) {
        if (palArray[j] !== palArray[arrLength - 1 - j]) {
            test = false;
        };
    };
    return test;
};

// Do not edit below this line
//module.exports = palindromes;
