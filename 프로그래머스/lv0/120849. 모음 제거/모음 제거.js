const solution = function (my_string) {
  const vowel = ["a", "e", "i", "o", "u"];
  let answer = my_string.split("");
  for (let i = 0; i < vowel.length; i++) {
    answer = answer.filter((element) => element != vowel[i]);
  }
  return answer.join("");
};