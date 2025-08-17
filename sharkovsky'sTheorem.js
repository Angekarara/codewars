function sharkovsky(a, b) {
  function getPosition(n) {
    if ((n & (n - 1)) === 0) {
      return -Math.log2(n);
    }

    let power = 1;
    let original = n;
    while (n % 2 === 0) {
      n /= 2;
      power *= 2;
    }
    return (n - 3) / 2 + power * 100;
  }

  return getPosition(a) < getPosition(b);
}
