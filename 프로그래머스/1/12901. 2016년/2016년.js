const solution = (a, b) => {
  const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = new Date(2016, a - 1, b);
  return dayList[day.getDay()];
};
