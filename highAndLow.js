function highAndLow(numbers) {
  const arr = numbers.split(" ");
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return `${max} ${min}`;
}
console.log(highAndLow("2 96 34 8 10"));
console.log(highAndLow("9 3 8 100"));
