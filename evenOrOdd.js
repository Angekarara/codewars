const target = function (n) {
    return n%2 === 0 ? 'Even' : 'Odd' 
  }
    const handler = {
    get(target, prop){
      return target(prop)
    }
     }
   const evenOrOdd = new Proxy(target, handler)

console.log(evenOrOddProxy(2)); // 'Even'
console.log(evenOrOddProxy[2]); // 'Even'
console.log(evenOrOddProxy(7)); // 'Odd'
console.log(evenOrOddProxy[7]); // 'Odd'
console.log(evenOrOddProxy(-44)); // 'Even'
console.log(evenOrOddProxy(-9)); // 'Odd'
console.log(evenOrOddProxy[-9]); // 'Odd'