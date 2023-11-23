const solution = (quiz) =>
  quiz.map((el) => {
    if (new Function(`return ${el.split(" = ")[0]}`)() == el.split(" = ")[1]) {
      return "O";
    } else return "X";
  });