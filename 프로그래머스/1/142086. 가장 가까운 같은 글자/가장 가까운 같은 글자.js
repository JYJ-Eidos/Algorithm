const solution = (s) => {
  const arr = Array(26).fill(-1);
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    let frontSpell = arr[s[i].charCodeAt() - 97];
    if (arr[s[i].charCodeAt() - 97] === -1) {
      answer.push(-1);
      arr[s[i].charCodeAt() - 97] = i;
    } else {
      answer.push(i - frontSpell);
      arr[s[i].charCodeAt() - 97] = i;
    }
  }

  return answer;
};
