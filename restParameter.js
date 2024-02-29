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
