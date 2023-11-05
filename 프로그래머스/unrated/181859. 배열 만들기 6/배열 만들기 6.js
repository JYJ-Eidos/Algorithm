const solution = (arr) => {
  let i = 0;
  const stk = [];
  while (i < arr.length) {
    if (stk.length > 0 && stk[stk.length - 1] === arr[i]) {
      stk.pop();
      i++;
    } else {
      stk.push(arr[i]);
      i++;
    }
  }
  const answer = stk.length === 0 ? [-1] : stk;
  return answer;
};
