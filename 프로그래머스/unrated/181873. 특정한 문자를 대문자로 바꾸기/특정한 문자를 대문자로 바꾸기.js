const solution = (my_string, alp) => {
  return my_string
    .split("")
    .map((value) => (value === alp ? value.toUpperCase() : value))
    .join("");
};
