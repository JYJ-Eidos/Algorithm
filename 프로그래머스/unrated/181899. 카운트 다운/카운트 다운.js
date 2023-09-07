const solution = (start, end_num) => {
  return Array(start - end_num + 1)
    .fill(1)
    .map((value, index) => start - index);
};