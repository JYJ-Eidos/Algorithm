const solution = (arr) => {
  const sliArr = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
  return sliArr.length !== 0 ? sliArr : [-1];
};
