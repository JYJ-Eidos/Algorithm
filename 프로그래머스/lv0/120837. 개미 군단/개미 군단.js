const solution = (hp) => {
  count = 0;
  while (hp >= 5) {
    hp = hp - 5;
    count++;
  }

  while (hp >= 3) {
    hp = hp - 3;
    count++;
  }
  return count + hp;
};

