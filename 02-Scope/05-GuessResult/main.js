// let message = "Welcome to Thailand";

// function logMessage(message) {
//     message = "Hello everybody";
//     console.log(message); // * error
// }

// logMessage(message);
// console.log(message); // ** error
// ```


let name = "John";

function sayHi(input) {
    console.log(name); // *** Error
    name = input;
}

sayHi();
console.log(name); // **** Error

