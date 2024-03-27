function removeDuplicates(arr) {
  const arr2 = new Set(arr);
  return Array.from(arr2);
}
console.log(removeDuplicates([1, 1, 2, 2, 3, 3]));
