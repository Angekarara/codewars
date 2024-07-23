function printerErrors2(s) {
  const arr = ["x", "y", "z"];
  let count = 0;
  const stringArray = s.split("");
  console.log(stringArray);
  for (let i = 0; i <= arr.length; i++) {
    for (j = 0; j < i; j++) {
      if (s[i] !== arr[i]) {
        count++;
      }
    }
  }
  return count
}
console.log(printerErrors2("aaaxbbbbyyhwawiwjjjwwm"));
console.log(printerErrors2("gkopipytewwazxcvbnm"))
