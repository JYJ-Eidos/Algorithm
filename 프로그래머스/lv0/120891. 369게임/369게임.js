const solution = (order) => {
  let answer = 0;
  const strOfNum = String(order);
  for (let i = 0; i < strOfNum.length; i++) {
    if (Number(strOfNum[i]) % 3 === 0 && Number(strOfNum[i]) !== 0) {
      answer++;
    }
  }
  return answer;
};
