const solution = (s) => {
  const alphabetArray = Array(26)
    .fill(97)
    .map((element, index) => String.fromCharCode(element + index));
  let answer = "";
  alphabetArray.forEach((element) => {
    if (
      s.indexOf(element) === s.lastIndexOf(element) &&
      s.indexOf(element) !== -1
    ) {
      answer += element;
    }
  });

  return answer;
};