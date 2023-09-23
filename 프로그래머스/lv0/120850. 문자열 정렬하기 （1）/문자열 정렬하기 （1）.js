const solution = (my_string) => {
  let answer = [];
  for (let i = 0; i < my_string.length; i++) {
    if (!Number.isNaN(Number(my_string[i]))) {
      answer.push(Number(my_string[i]));
    }
  }
  return answer.sort((a, b) => a - b);
};