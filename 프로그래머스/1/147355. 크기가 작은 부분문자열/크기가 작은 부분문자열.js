const solution = (t, p) => {
  const lengthOfP = p.length;
  const lengthOfT = t.length;
  let answer = 0;

  for (let i = 0; i <= lengthOfT - lengthOfP; i++) {
    if (Number(t.slice(i, i + lengthOfP)) <= Number(p)) {
      answer++;
    }
  }
  return answer;
};