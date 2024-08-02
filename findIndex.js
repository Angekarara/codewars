const find = (a, e) => (a.includes(e) ? a.indexOf(e) : "Not found");
let array = [3,5,9,1,2,8]
console.log(find(array, 3))
console.log(find(array, 1))
console.log(find(array, 4))
console.log(find(array, 5))