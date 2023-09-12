const solution = (arr, n) => {
  return arr.length % 2 === 1
    ? arr.map((value, index) => {
        if (index % 2 === 0) {
          return value + n;
        } else {
          return value;
        }
      })
    : arr.map((value, index) => {
        if (index % 2 === 1) {
          return value + n;
        } else {
          return value;
        }
      });
};
