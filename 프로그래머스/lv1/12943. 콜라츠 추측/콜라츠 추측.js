const solution = (num) => {
  let count = 0;
  while (count !== 500 && num !== 1) {
    if (num % 2 === 0) {
      num /= 2;
      count++;
    } else {
      num = num * 3 + 1;
      count++;
    }
  }

  if (count === 500) {
    return -1;
  } else {
    return count;
  }
};
