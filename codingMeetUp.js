function isLanguageDiverse(list) {
  let obj = {};
  const [...arr] = list.map((l) => l.language);
  arr.forEach((el) => {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  });
  const counts = Object.values(obj);
  const maxCount = Math.max(...counts);
  const minCount = Math.min(...counts);

  return maxCount <= 2 * minCount;
}
console.log(
  isLanguageDiverse([
    {
      firstName: "Daniel",
      lastName: "J.",
      country: "Aruba",
      continent: "Americas",
      age: 42,
      language: "Python",
    },
    {
      firstName: "Kseniya",
      lastName: "T.",
      country: "Belarus",
      continent: "Europe",
      age: 22,
      language: "Ruby",
    }
  ])
);
