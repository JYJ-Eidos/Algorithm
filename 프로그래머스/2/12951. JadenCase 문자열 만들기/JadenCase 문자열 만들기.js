const solution = (s) => {
  const answer = s
    .split(" ")
    .map((el) => {
      if (Boolean(el)) {
        return el[0].toUpperCase() + el.slice(1).toLowerCase();
      }
    })
    .join(" ");

  return answer;
};