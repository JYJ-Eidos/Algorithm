const solution = (n, left, right) => {
    let answer = [];
    for (let i = Math.floor(left / n + 1); i <= Math.ceil((right + 1) / n); i++) {
        for (let j = 1; j <= n; j++) {
            if (i >= j) {
                answer.push(i);
            }
            else {
                answer.push(j);
            }
        }
    }
    return answer.slice(left % n, (left % n) + right - left + 1);
};