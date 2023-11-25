const solution = (l, r) => {
  const binaryPattern = /^[05]+$/;
  const answer = Array(r - l + 1)
    .fill(l)
    .map((num, idx) => num + idx)
    .filter((num) => binaryPattern.test(String(num)));

  return answer.length === 0 ? [-1] : answer;
};