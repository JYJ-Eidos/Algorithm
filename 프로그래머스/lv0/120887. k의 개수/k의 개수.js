const solution = (i, j, k) => {
  let str = "";
  for (let x = i; x <= j; x++) {
    str += x;
  }
  return str.split("").filter((elemnt) => elemnt == k).length;
};
