/*
###การเขียนฟังก์ชันมี 2 แบบหลักๆ
1.Function Declaration/ Name Function
2. Function Expression/ มักถูกเขียนในรูปของ Anonymous Function

*/

/* 
การใช้งานฟังก์ชันต้อง
1. ประกาศฟังก์ชัน => กำหนดชื่อ, input
2. เรียกใช้งาน
*/

// 1.Define
function sayHi(name, lastname) {
    console.log(`Hello ${name}${lastname}`);
}

//2. Call
sayHi('John', 'Doe'); //Hello
sayHi("Peakpoon", "Panchiwa"); //Hello

//Return value ผลลัพท์ที่ได้จากการ run function จนเสร็จ
// add(5,6) Return value, FN Result

function add(x, y) {
    let result = x + y;
    return result;
}

console.log(11 === add(5, 6)); // Done : add(5,6) === result 
let r = add(5, 6); // reusable result
console.log(r);
console.log(r);

console.log(add(5, 6));// one time
console.log(add(5, 6)); // one time



function isEven(n) {
    // if (n % 2 == 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return n % 2 == 0;
    // Return expression
}



console.log(isEven(5));
console.log(isEven(6));

/*Check point 
Declare :ประกาศเป็น
Params : รัย input
return : เข้าใจเรื่อง Return
call : รับฟังก์ชัน
*/

//## FN EXPRESSion
let a = 5 * 2 + 7;
//Format: Variable = expression
/*
Expression
- single value: 7
- combine expression: 7+2
- FN result: add (7,2)
*/

let myFunc = add;
let z = console.log;
//Format: Variable FN(FN expression) 
//FN Expression: การ assign FN ให้กับ variable
console.log(myFunc(5, 2));
z('Hi');//z =console.log;

//anonymous FN
//SYNTAX FN EXPRESSION
//อธิบาย : กำลัง assign Anonymous fn ให้กับตัวแปร sayHello

const sayHello = function (name) {
    console.log('Hi ' + name);
};
sayHello('expression');

/* 1. function add (){}
2A let add = function () {}
2B let add = () => {}
*/

// const minus = (a, b) => {
//     return a - b;
// };

const minus = (a, b) => a - b;
const minusTwo = (a) => a - 2;
const two = 2;

// console.log (minusTwo));
// console.log (two());
