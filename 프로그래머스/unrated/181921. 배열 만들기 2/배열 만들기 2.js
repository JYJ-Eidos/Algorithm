const solution = (l, r) => {
  const binaryPattern = /^[01]+$/;
  const answer = Array(r - l + 1)
    .fill(l)
    .map((num, idx) => num + idx)
    .filter((num) => {
      if (num % 5 === 0) {
        if (binaryPattern.test(String(num / 5))) {
          return true;
        }
      }
      return false;
    });

  return answer.length === 0 ? [-1] : answer;
};