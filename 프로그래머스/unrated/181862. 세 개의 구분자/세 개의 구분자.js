const solution = (myStr) => {
  const regex = /[a-c]/g;
  const answer = myStr.split(regex).filter((element) => element.length !== 0);
  return answer.length === 0 ? ["EMPTY"] : answer;
};
