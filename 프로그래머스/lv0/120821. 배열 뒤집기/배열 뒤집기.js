const solution = function (num_list) {
  let answer = [];
  for (let i = -1; i > -1 * (num_list.length + 1); i--) {
    answer.push(num_list.at(i));
  }
  return answer;
};
