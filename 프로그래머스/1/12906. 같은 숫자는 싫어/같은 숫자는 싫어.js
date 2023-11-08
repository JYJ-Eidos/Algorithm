const solution = (arr) => {
  let num = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (num[num.length - 1] !== arr[i]) {
      num.push(arr[i]);
    }
  }
  return num;
};
