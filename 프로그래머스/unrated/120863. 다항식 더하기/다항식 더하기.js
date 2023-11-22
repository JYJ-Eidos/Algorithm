const solution = (polynomial) => {
  let a = 0;
  let b = 0;
  polynomial.split(" + ").forEach((el) => {
    if (el.includes("x") && el.length === 1) {
      a += 1;
    } else if (el.includes("x")) {
      a += Number(el.split("x")[0]);
    } else {
      b += Number(el);
    }
  });

  if (a === 0) {
    return `${b}`;
  } else if (b === 0) {
    return a === 1 ? "x" : `${a}x`;
  } else {
    return a === 1 ? `x + ${b}` : `${a}x + ${b}`;
  }
};