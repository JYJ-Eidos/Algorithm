const solution = (s, n) => {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
    } else if (s[i].charCodeAt() >= 97) {
      answer +=
        s[i].charCodeAt() + n <= 122
          ? String.fromCharCode(s[i].charCodeAt() + n)
          : String.fromCharCode(s[i].charCodeAt() + n - 26);
    } else {
      answer +=
        s[i].charCodeAt() + n <= 90
          ? String.fromCharCode(s[i].charCodeAt() + n)
          : String.fromCharCode(s[i].charCodeAt() + n - 26);
    }
  }
  return answer;
};