function pillars(numPill, dist, width) {
  // your code here
  console.log(numPill, dist, width);
  return numPill == 1 ? 0 : (numPill - 2) * width + 100 * dist * (numPill - 1);
}
