function findMaxNumber(numbers) {
  return numbers.reduce((max, num) => (num > max ? num : max));
}
