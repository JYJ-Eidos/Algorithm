const solution = (n) => {
  const answer = Array(1000)
    .fill(0)
    .map((el, idx) => el + idx)
    .filter((el) => !String(el).includes("3") && el % 3 !== 0);

  return answer[n - 1];
};