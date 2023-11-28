const solution = (strings, n) => {
  const copyStrings = [...strings].sort();
  const spell = [...new Set(strings.map((el) => el[n]))].sort();
  const answer = [];

  spell.forEach((el) => {
    copyStrings.forEach((word) => {
      if (word[n] === el) {
        answer.push(word);
      }
    });
  });

  return answer;
};
