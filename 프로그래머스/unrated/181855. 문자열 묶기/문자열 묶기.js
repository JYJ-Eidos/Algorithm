const solution = (strArr) => {
  const arr = strArr.map((element) => element.length);
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }

  let answer = 0;
  for (const element in obj) {
    if (answer < obj[element]) {
      answer = obj[element];
    }
  }
  return answer;
};