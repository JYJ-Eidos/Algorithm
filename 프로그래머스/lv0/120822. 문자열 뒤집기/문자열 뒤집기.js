const solution = function (my_string) {
  return my_string
    .split("")
    .reverse()
    .reduce((acc, cur) => acc + cur, "");
};
