const target = function (n) {
    return n%2 === 0 ? 'Even' : 'Odd' 
  }
    const handler = {
    get(target, prop){
      return target(prop)
    }
     }
   const evenOrOdd = new Proxy(target, handler)

console.log(evenOrOdd(2)); // 'Even'
console.log(evenOrOdd[2]); // 'Even'
console.log(evenOrOdd(7)); // 'Odd'
console.log(evenOrOdd[7]); // 'Odd'
console.log(evenOrOdd(-44)); // 'Even'
console.log(evenOrOdd(-9)); // 'Odd'
console.log(evenOrOdd[-9]); // 'Odd'