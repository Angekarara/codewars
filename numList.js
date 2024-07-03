function sumNoDuplicates(numList) {
  let frequency = {};
  for (let num of numList) {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  }
  let sum = 0;
  for (let letter in frequency) {
    if (frequency[letter] === 1) {
      sum += parseInt(letter);
    }
  }
  return sum;
}

console.log(sumNoDuplicates([3, 4, 3, 6])); // Output: 10
console.log(sumNoDuplicates([1, 10, 3, 10, 10])); // Output: 4
