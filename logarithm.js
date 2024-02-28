function logs(x, a, b) {
  //your code here
  console.log(x);
  const y = Math.log(a) / Math.log(x);
  const z = Math.log(b) / Math.log(x);
  let sum = y + z;
  return sum;
}
