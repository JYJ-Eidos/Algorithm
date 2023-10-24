const solution = (arr, k) => {
  const setArr = [...new Set(arr)];
  let count = setArr.length;
  while (count < k) {
    setArr.push(-1);
    count++;
  }
  return setArr.slice(0, k);
};
