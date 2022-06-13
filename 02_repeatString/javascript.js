function repeatString(string, num) {
    let newString = "";
    for (let i = 0; i < num; i++) {
        newString = string.concat(newString);
    }
    return newString
};

// Do not edit below this line
