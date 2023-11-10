const solution = (dots) => {
  const point = dots[0];
  for (let i = 1; i < dots.length; i++) {
    if (point[0] !== dots[i][0] && point[1] !== dots[i][1]) {
      return Math.abs(
        (point[0] - dots[i][0]) * Math.abs(point[1] - dots[i][1])
      );
    }
  }
};
