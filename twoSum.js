function twoSum(numbers, target) {
  const seen = {};

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (seen.hasOwnProperty(complement)) {
      return [seen[complement], i];
    }

    seen[numbers[i]] = i;
  }

  return [];
}
