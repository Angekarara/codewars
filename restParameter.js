const array = [1, 2, 3, 4, 5, 6];
const [x, y, z, ...h] = array;
console.log(x, y, z, h);
console.log(array);

function print(...items) {
  for (let item of items) {
    console.log(item);
  }
}
print(["ar", "rea", "jao", "ant", "nana", "opa"]);

//Example 2

function average(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  if (nums.length === 0) {
    return 0;
  }
  return sum / nums.length;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
