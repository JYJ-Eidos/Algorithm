const solution = (myString) => {
  return myString
    .split("")
    .map((value) => (value.charCodeAt() > "l".charCodeAt() ? value : "l"))
    .join("");
};
