const solution = (x) => {
  let add = String(x)
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  return x % add === 0 ? true : false;
};
