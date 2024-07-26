function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);
  if (Number.isInteger(sqrt)) {
    return (sqrt + 1) * (sqrt + 1);
  }
  return -1;
}
console.log(findNextSquare(144));
console.log(findNextSquare(114));
