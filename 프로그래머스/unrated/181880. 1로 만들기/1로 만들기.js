const solution = (num_list) => {
  const cal = (number) => {
    let count = 0;
    while (number !== 1) {
      if (number % 2 === 0) {
        number /= 2;
      } else {
        number = (number - 1) / 2;
      }
      count++;
    }
    return count;
  };

  return num_list.reduce((acc, cur) => acc + cal(cur), 0);
};
