const solution = function (n) {
  let x = n + "";
  return x.split("").reduce((acc, cur) => acc + parseInt(cur), 0);
};