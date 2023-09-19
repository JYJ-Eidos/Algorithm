const solution = (todo_list, finished) => {
  let answer = [];
  todo_list.forEach((value, index) => {
    if (!finished[index]) {
      answer.push(value);
    }
  });
  return answer;
};
