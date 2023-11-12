const solution = (picture, k) => {
  const answer = [];
  const width = picture.map((el) => {
    let word = "";
    for (let i = 0; i < el.length; i++) {
      word += el[i].repeat(k);
    }
    return word;
  });
  width.map((el) => {
    for (let i = 0; i < k; i++) {
      answer.push(el);
    }
  });
  return answer;
};
