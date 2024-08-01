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
    },
    {
      firstName: "Sou",
      lastName: "B.",
      country: "Japan",
      continent: "Asia",
      age: 43,
      language: "Ruby",
    },
    {
      firstName: "Hanna",
      lastName: "L.",
      country: "Hungary",
      continent: "Europe",
      age: 95,
      language: "JavaScript",
    },
    {
      firstName: "Jayden",
      lastName: "P.",
      country: "Jamaica",
      continent: "Americas",
      age: 18,
      language: "JavaScript",
    },
    {
      firstName: "Joao",
      lastName: "D.",
      country: "Portugal",
      continent: "Europe",
      age: 25,
      language: "JavaScript",
    },
  ])
);
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
    },
    {
      firstName: "Jayden",
      lastName: "P.",
      country: "Jamaica",
      continent: "Americas",
      age: 18,
      language: "JavaScript",
    },
    {
      firstName: "Joao",
      lastName: "D.",
      country: "Portugal",
      continent: "Europe",
      age: 25,
      language: "JavaScript",
    },
  ])
);
