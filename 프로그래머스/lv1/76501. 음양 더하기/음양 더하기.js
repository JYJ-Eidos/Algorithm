const solution = (absolutes, signs) => {
  let answer = 0;
  absolutes.forEach((element, index) => {
    signs[index] ? (answer += element) : (answer -= element);
  });
  return answer;
};
