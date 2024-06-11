function findSmallestM(x) {
    if (x % 2 === 0) {
        return -1;
    }

    let number = 9;
    let count = 1;
    let remainder = number % x;

    while (remainder !== 0) {
        count++;
        number = number * 10 + 9;
        remainder = (remainder * 10 + 9) % x;
    }

    return number / x;
}

console.log(findSmallestM(11)); //  9
console.log(findSmallestM(12)); //  -1
console.log(findSmallestM(13)); // 76923
