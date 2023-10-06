const solution = (emergency) => {
  const sortEmergercy = [...emergency].sort((a, b) => b - a);
  return emergency.map((element) => sortEmergercy.indexOf(element) + 1);
};
