function modifyMultiply(str, loc, num) {
  let strArray = str.split(" ");
  let str2 = `${strArray[loc]} `;
  return str2.repeat(num).split(" ").slice(0, -1).join("-");
}
