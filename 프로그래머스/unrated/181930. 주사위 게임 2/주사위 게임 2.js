const solution = (a, b, c) => {
  if (a === b && b === c) {
    return (
      (a + b + c) *
      (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) *
      (Math.pow(a, 3) + Math.pow(a, 3) + Math.pow(a, 3))
    );
  } else if (a === b || b === c || c === a) {
    return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
  } else {
    return a + b + c;
  }
};
