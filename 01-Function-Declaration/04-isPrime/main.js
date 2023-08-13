
// let n = +prompt('Enter number');
// let isPrime = true; // flag

// function numIsPrime(n) {
//     for (let divider = 2; divider < n; divider++) {
//         if (n % divider == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) { alert(`${n} is prime number`); }
//     else { alert(`${n} not prime number`); }
//     ;
// }
// numIsPrime(n);

// function checkPrime(num) {
//     for (let divider = 2; divider < n; divider++) {
//         if (num % divider == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) { alert(`${n} is prime number`); }
//     else { alert(`${n} not prime number`); }
//     ;
// }
// checkPrime(n);

function checkPrime(num) {
    let isPrime = true;
    for (let d = 2; d < num; d++) {
        if (num % d == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(num);
}