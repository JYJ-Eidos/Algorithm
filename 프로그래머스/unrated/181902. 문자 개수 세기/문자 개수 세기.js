const solution = (my_string) => {
  const answer = Array(52).fill(0);

  for (let i = 0; i < my_string.length; i++) {
    my_string[i].charCodeAt() <= 90
      ? (answer[my_string[i].charCodeAt() - 65] += 1)
      : (answer[my_string[i].charCodeAt() - 71] += 1);
  }

  return answer;
};

