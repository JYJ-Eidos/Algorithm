const solution = (n) => {
  const prime = [
    1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
    71, 73, 79, 83, 89, 97,
  ];

  const arr = Array(n)
    .fill(1)
    .map((value, index) => value + index);

  return arr.filter((value) => !prime.includes(value)).length;
};

