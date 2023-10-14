const solution = (my_string) => {
  const regex = /[a-zA-Z]/g;
  return my_string
    .split(regex)
    .reduce(
      (acc, cur) => (Number.isNaN(Number(cur)) ? acc : acc + Number(cur)),
      0
    );
};
