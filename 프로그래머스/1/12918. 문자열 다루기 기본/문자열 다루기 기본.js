const solution = (s) => {
  const sIsNum = (() => {
    for (const value of s) {
      if (Number.isNaN(Number(value))) {
        return false;
      }
    }
    return true;
  })();
  return (s.length === 4 || s.length === 6) && sIsNum ? true : false;
};