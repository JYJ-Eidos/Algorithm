const solution = (n, arr1, arr2) => {
  return arr1.map((el, idx) => {
    const combined = (el | arr2[idx]).toString(2).padStart(n, "0");
    return combined.replace(/1/g, "#").replace(/0/g, " ");
  });
};
