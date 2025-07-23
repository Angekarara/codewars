function highAndLow(numbers) {
  const arr = numbers.split(" ");
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return `${max} ${min}`;
}
