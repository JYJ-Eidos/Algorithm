const solution = (intStrs, k, s, l) => {
  const answer = [];
  intStrs.forEach((element) => {
    if (Number(element.slice(s, s + l)) > k) {
      answer.push(Number(element.slice(s, s + l)));
    }
  });
  return answer;
};
