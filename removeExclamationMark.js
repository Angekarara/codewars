function removeExclamationMarks(s) {
  //   console.log(s)
  let results = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "!") {
      results += s[i];
    }
  }
  return results;
}
console.log(removeExclamationMarks("Hello World!"));
console.log(removeExclamationMarks("Hello! , World!"));
