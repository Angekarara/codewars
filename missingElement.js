function getMissingElement(superImportantArray) {
  for (let i = 0; i <= superImportantArray.length; i++) {
    if (!superImportantArray.includes(i)) {
      return i;
    }
  }
}
