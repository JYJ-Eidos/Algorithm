const solution = (my_string, s, e) => {
  const answer = my_string.split("");
  const part = answer.splice(s, e - s + 1).reverse();
  answer.splice(s, 0, ...part);
  return answer.join("");
};