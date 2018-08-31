function isPowerOfTwo(num) {
  if (num < 2) {
    return false;
  }
  while (num !== 1) {
    if (num % 2 !== 0) {
      return false;
    }

    num /= 2;
  }

  return true;

}
isPowerOfTwo(5);
