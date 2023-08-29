const solution = (arr) => {
  return arr.map((element) => {
    if (element >= 50 && element % 2 === 0) {
      return element / 2;
    } else if (element < 50 && element % 2 === 1) {
      return element * 2;
    } else {
      return element;
    }
  });
};
