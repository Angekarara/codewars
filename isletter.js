function isItLetter(character) {
  const letters = character.match(/[a-z]/gi);
  return letters ? true : false;
}
console.log(isItLetter("1"))
console.log(isItLetter("D"))