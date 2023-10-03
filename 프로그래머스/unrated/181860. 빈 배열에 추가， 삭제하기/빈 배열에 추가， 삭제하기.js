const solution = (arr, flag) => {
  const X = [];
  flag.map((value, index) => {
    if (value) {
      for (let i = 0; i < arr[index] * 2; i++) {
        X.push(arr[index]);
      }
    } else {
      for (let i = 0; i < arr[index]; i++) {
        X.pop();
      }
    }
  });
  return X;
};
