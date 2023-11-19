const solution = (array, commands) => {
  const answer = [];
  commands.forEach((arr) => {
    answer.push(
      array.slice(arr[0] - 1, arr[1]).sort((a, b) => a - b)[arr[2] - 1]
    );
  });
  return answer;
};