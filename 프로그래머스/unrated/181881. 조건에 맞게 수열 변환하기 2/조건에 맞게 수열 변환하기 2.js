const solution = (arr) => {
  let copyArr1 = [];
  let copyArr2 = [...arr];
  let count = 0;
  while (copyArr2.map((el, idx) => el === copyArr1[idx]).includes(false)) {
    copyArr1 = [...copyArr2];
    copyArr2 = [
      ...copyArr2.map((el) => {
        if (el >= 50 && el % 2 === 0) {
          return el / 2;
        } else if (el < 50 && el % 2 === 1) {
          return el * 2 + 1;
        } else {
          return el;
        }
      }),
    ];
    count++;
  }
  return count - 1;
};
