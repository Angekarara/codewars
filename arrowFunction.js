//example of using an arrow function
const names = [
  "Afghanistan",
  "Aruba",
  "Bahamas",
  "Chile",
  "Fiji",
  "Gabon",
  "Luxembourg",
  "Nepal",
];

const longNames = names.filter((name) => name.length > 6);
const upper = names.map((name) => name.toUpperCase());
const splits = names.map((name) => name.split("").reverse("").join(""));
