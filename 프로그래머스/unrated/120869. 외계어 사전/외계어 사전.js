const solution = (spell, dic) => {
  for (let i = 1; i < dic.length; i++) {
    if (
      !spell.map((el) => dic[i].includes(el)).includes(false) &&
      dic[i].length === spell.length
    ) {
      return 1;
    }
  }

  return 2;
};