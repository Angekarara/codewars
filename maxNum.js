function findMaxNumber(numbers) {
  return numbers.reduce((max, num) => (num > max ? num : max));
}
console.log(findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findMaxNumber([1, 2, 3, 4, 5, 10, 9, 8, 7, 6]));
