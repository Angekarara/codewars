function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);
  if (Number.isInteger(sqrt)) {
    return (sqrt + 1) * (sqrt + 1);
  }
  return -1;
}
