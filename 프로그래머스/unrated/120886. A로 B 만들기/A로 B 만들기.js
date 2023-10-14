const solution = (before, after) => {
  const splitAfter = after.split("");

  for (let i = 0; i < before.length; i++) {
    const idx = splitAfter.indexOf(before[i]);
    if (idx !== -1) {
      splitAfter.splice(idx, 1);
    } else {
      return 0;
    }
  }
  return 1;
};