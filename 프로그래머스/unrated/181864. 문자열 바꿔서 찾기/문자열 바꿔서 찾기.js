const solution = (myString, pat) => {
  const conversion = myString
    .split("")
    .map((str) => {
      if (str === "A") {
        return "B";
      } else {
        return "A";
      }
    })
    .join("");

  return conversion.includes(pat) ? 1 : 0;
};