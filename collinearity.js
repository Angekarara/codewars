function collinearity(x1, y1, x2, y2) {
  return x2 * y1 === y2 * x1;
}
console.log(collinearity(4, 2, 9, 1));
