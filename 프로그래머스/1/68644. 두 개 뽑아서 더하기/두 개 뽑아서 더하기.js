const solution = (number) => {
    const addNum = [];
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            addNum.push(number[i] + number[j]);
        }
    }
    const answer = [...new Set(addNum)].sort((a, b) => a - b);
    return answer;
};
