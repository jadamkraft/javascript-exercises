function reverseString(string) {
    reverseArray = [];
    let tempArray = string.split("");
    let arrayNum = tempArray.length;
    for (let i = 0; i < arrayNum; i++) {
        let newChar = tempArray.pop();
        reverseArray.push(newChar);
    }
    return reverseArray.join("");
};