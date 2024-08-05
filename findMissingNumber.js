function missingNo(nums) {
  for (let i = 0; i <= 100; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
}
