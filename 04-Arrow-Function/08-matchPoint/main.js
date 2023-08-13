// ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน
// // let sum = 0;
// // for (let i = 0; i <= 3; i++) {
// //     const gameResult = (a, b) => {
// //         if (a > b && a != b) {
// //             return "x===3";
// //         }
// //         else if (b > a && b != a) {
// //             return "x===1";
// //         }
// //         else if (a == b) {
// //             return "x===0"
// //         }
// //     }
// // }
// let sumWin = 0;
// let sumDraw = 0;
// const gameResult = (win, draw) => {
//     for (let i = 0; i <= 100; i++) {
//         if (i == win) {
//             allWin = sumWin += (win * 3);
//         }
//     }
//     for (let i = 0; i <= 100; i++) {
//         if (i == draw) {
//             allDraw = sumDraw += (draw * 1);
//         }
//     } return ((+allDraw) + (+allWin));
// }
// console.log(gameResult(28, 5));

const calMathPoint = (win, draw) => win * 3 + draw;

console.log(calMathPoint(win, draw));







