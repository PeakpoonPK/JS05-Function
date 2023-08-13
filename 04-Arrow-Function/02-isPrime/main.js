let isPrime = (num) => {
    for (let d = 2; d < num; d++) {
        if (num % d == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(num);
}

console.log(isPrime(10))





// function checkPrime(num) {
//     let isPrime = true;
//     for (let d = 2; d < num; d++) {
//         if (num % d == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) console.log(num);
// }