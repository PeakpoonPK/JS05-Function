// ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด(ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)
//   ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020
// Myself
// let day = 0;
// let checkLeapYear = (num) => {
//   if (num % 100 == 0 && num % 400 != 0) {
//     day += 365;
//   }
//   else if (num % 4 == 0) {
//     day += 366;
//   }
//   else { day += 365; }
//   return day;
// }

// console.log(checkLeapYear(2020));


let sumLeapYear = 0;
let sumNonLeapYear = 0;
let sumNonYear = 0;

const birthdayYear = (year) => {
    for (let i = year; i <= 2020; i++) {
        if (i % 100 == 0 && i % 400 != 0) {
            sumNonLeapYear += 365;
        } else if (i % 4 == 0) {
            sumLeapYear += 366;
        } else {
            sumNonYear += 365;
        }
    }
    return sumNonLeapYear + sumLeapYear + sumNonYear;
};

console.log(birthdayYear(1990));



//#########For easy
// const birthdayYear = (year) => { return (2020 - year) * 365 };
// console.log(birthdayYear(1999))
//