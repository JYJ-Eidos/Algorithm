const solution = (s) => {
  return s.split(" ").map((word) =>
    word
      .split("")
      .map((spell, idx) =>
        idx % 2 === 0 ? spell.toUpperCase() : spell.toLowerCase()
      )
      .join("")
  ).join(" ");
};
