const solution = (keyInput, board) => {
  const answer = [0, 0];
  const maxWidth = (board[0] - 1) / 2;
  const maxHeight = (board[1] - 1) / 2;

  for (let i = 0; i < keyInput.length; i++) {
    switch (keyInput[i]) {
      case "left":
        if (Math.abs(answer[0] - 1) <= maxWidth) {
          answer[0] -= 1;
        }
        break;

      case "right":
        if (Math.abs(answer[0] + 1) <= maxWidth) {
          answer[0] += 1;
        }
        break;

      case "up":
        if (Math.abs(answer[1] + 1) <= maxHeight) {
          answer[1] += 1;
        }
        break;

      case "down":
        if (Math.abs(answer[1] - 1) <= maxHeight) {
          answer[1] -= 1;
        }
        break;

      default:
        break;
    }
  }
  return answer;
};