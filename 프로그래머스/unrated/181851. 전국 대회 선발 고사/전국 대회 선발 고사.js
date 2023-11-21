const solution = (rank, attendance) => {
  const arr = rank.filter((rank, idx) => attendance[idx]).sort((a, b) => a - b);
  return (
    rank.indexOf(arr[0]) * 10000 +
    rank.indexOf(arr[1]) * 100 +
    rank.indexOf(arr[2])
  );
};
