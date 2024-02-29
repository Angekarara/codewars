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

console.log(longNames);

const upper = names.map((name) => name.toUpperCase());

console.log(upper);
