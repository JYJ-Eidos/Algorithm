const solution = (rsp) => {
  const prs = {
    2: "0",
    0: "5",
    5: "2",
  };
  let answer = "";

  for (let i = 0; i < rsp.length; i++) {
    answer += prs[Number(rsp[i])];
  }
  return answer;
};
