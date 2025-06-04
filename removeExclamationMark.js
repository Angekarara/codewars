function removeExclamationMarks(s) {
  let results = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "!") {
      results += s[i];
    }
  }
  return results;
}
