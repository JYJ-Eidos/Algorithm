const solution = (n, m) => {
  let small = n < m ? n : m;
  let large = n > m ? n : m;
  let num = small;

  while (small % num !== 0 || large % num !== 0) {
    num--;
  }

  return [num, (small * large) / num];
};