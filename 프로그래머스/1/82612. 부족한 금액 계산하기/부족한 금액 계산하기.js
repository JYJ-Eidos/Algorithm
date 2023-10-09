const solution = (price, money, count) => {
  const result = ((count * (count + 1)) / 2) * price;
  return result - money >= 0 ? result - money : 0;
};
