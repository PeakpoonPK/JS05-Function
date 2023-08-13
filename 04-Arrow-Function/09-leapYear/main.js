// Myself
//let leapYear = (num) => {
//     if (num % 100 == 0 && num % 400 != 0) {
//         return "not leap year";
//     }
//     else if (num % 4 == 0) {
//         return "leap year";
//     }
//     else { return 'not leap year'; }
// }

// console.log(leapYear(1000))


// 1
// const isLeapYear = (year) => {
//     if (year % 4 == 0 && year % 100 != 0) {
//         return true;
//     } else if (year % 100 === 0 && year % 400 != 0) {
//         return false;
//     } else if (year % 400 == 0) {
//         return true;
//     }
// }

// const isLeapYear = (year) => {
// if (year % 4 == 0) {
//     return true;
// } else if (year % 100 == 0) {
//     return false;
// } else if (year % 4 == 0) {
//     return true;
// }

//2
// if (year % 400==0) {
//     return true;
// }
// else if (year % 100 == 0) {
//     return false;
// }
// else if (year % 4 === 0) {
//     return true;
// }
//else{ return false;}

//3
// if (year % 400 ==0) {
//     return true;
// }
// else if (year % 100 == 0) {
//     return false;
// }
// else if (year % 4 === 0) {
//     return true;
// }
// return false;
//4
//     return year % 400 == 0 ? true :
//         year % 100 == 0 ? false :
//             year % 4 == 0 ? true :
// };

//------------------------------------
// if (year % 100 === 0) {
//     return year % 400 == 0;
// }
// return year % 4 === 0

// 5
//     return year % 100 === 0 ? year % 400 == 0 : year % 4 === 0;
// };

const isLeapYear = (year) => (year % 100 === 0 ? year % 400 == 0 : year % 4 === 0);