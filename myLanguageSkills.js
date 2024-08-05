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
