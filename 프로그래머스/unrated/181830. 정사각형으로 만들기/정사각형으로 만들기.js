const solution = (arr) => {
  const column = arr.length;
  const row = arr[0].length;

  if (column > row) {
    const fillZero = Array(column - row).fill(0);
    arr = arr.map((el) => [...el, ...fillZero]);
  } else if (column < row) {
    const fillZero = Array(row).fill(0);
    for (let i = 0; i < row - column; i++) {
      arr.push(fillZero);
    }
  }
  return arr;
};
