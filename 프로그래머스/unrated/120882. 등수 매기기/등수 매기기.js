function solution(score) {
    const arr = score.map((el) => el.reduce((acc, cur) => acc + cur, 0));
    const sortArr = [...arr].sort((a, b) => b - a);
    return arr.map((el) => sortArr.indexOf(el) + 1);
}