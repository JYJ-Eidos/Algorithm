const solution = (date1, date2) => {
  const date1Time = new Date(date1[0], date1[1], date1[2]);
  const date2Time = new Date(date2[0], date2[1], date2[2]);

  return date1Time < date2Time ? 1 : 0;
};