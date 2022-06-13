function repeatString(string, num) {
    let newString = "";
    if (num < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
            newString = string.concat(newString);
        }
    }
    return newString
};

// Do not edit below this line
