function factorialize(num) {
  var result = 1;
  for (var i = num; i > 0; i--) {
    result *= i;

  }
  return result;
}

factorialize(5);
