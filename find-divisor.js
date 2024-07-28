function divisors(integer) {
  let arr = [];
  if (integer > 1) {
    for (let i = 2; i < integer; i++) {
      if (integer % i === 0) {
        arr.push(i);
      }
    }
  }
  return arr.length ? arr : `${integer} is prime`;
}
console.log(divisors(15));
console.log(divisors(13));
console.log(divisors(12));
