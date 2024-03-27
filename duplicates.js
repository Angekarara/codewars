//first way
function removeDuplicates(arr) {
  const arr2 = new Set(arr);
  return Array.from(arr2);
}
console.log(removeDuplicates([1, 1, 2, 2, 3, 3]));

//second way

function removeDuplicatess(arrays) {
  const array2 = [];
  for (let num of arrays) {
    if (!array2.includes(num)) {
      array2.push(num);
    }
  }
  return array2;
}
console.log(removeDuplicatess([1, 1, 2, 2, 3, 3]));
