const solution = (myString) => {
  return myString
    .split("x")
    .filter((value) => value !== "")
    .sort();
};
