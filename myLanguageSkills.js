function myLanguages(results) {
  const arr = [];
  const entries = Object.entries(results).sort((a, b) => b[1] - a[1]);
  const sorted = Object.fromEntries(entries);
  for (let key in sorted) {
    if (sorted[key] >= 60) {
      arr.push(key);
    }
  }
  return arr;
}
console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
console.log(myLanguages({ Hindi: 60, Dutch: 93, Greek: 71 }));
console.log(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 }));
