const solution = (age) => {
  const transAge = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  let answer = "";
  for (let i = 0; i < String(age).length; i++) {
    answer += transAge[Number(String(age)[i])];
  }
  return answer;
};
