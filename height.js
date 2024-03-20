function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let currentHeight = 0;
  let days = 0;

  while (currentHeight < desiredHeight) {
    days++;
    currentHeight += upSpeed;

    if (currentHeight >= desiredHeight) {
      return days;
    }

    currentHeight -= downSpeed;
  }

  return days;
}
console.log(growingPlant(5, 2, 10));
console.log(growingPlant(9, 6, 19));
console.log(growingPlant(10, 7, 30));
