const solution = (arr1, arr2) => {
  const arr = arr1.map((el) => [...el]);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      arr[i][j] += arr2[i][j];
    }
  }
  return arr;
};