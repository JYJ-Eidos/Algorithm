const solution = (numbers) => {
  let add = 0;
  for (let i = 1; i < 10; i++) {
    if (!numbers.includes(i)) {
      add += i;
    }
  }
  return add;
};
