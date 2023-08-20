const solution = function (my_string) {
  return my_string
    .split("")
    .filter((element) => Number(element))
    .reduce((acc, cur) => acc + Number(cur), 0);
};