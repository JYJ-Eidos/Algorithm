const solution = function (my_string, letter) {
  return my_string
    .split("")
    .filter((element) => element !== letter)
    .join("");
};
