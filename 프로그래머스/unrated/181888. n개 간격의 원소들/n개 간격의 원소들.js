const solution = (num_list, n) => {
  return num_list.filter((element, index) => index % n === 0);
};
