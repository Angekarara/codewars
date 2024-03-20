function pillars(numPill, dist, width) {
  return numPill == 1 ? 0 : (numPill - 2) * width + 100 * dist * (numPill - 1);
}
console.log(pillars(3, 4, 6));
console.log(pillars(2, 1, 2));
