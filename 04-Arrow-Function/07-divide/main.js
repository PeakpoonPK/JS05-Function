
const checkNumber = (num) => {
    if (num % 7 === 0) {
        return "correct";
    }
    else {
        return "incorect";
    }
};

console.log(checkNumber(9))