const solution = (people, limit) => {
    const lightest = Math.min(...people);
    const standard = limit - lightest;
    const sortPeople = [...people]
        .sort((a, b) => a - b)
        .filter((weight) => weight <= standard);
    let answer = people.length - sortPeople.length;
    while (sortPeople.length !== 0) {
        if (sortPeople[0] + sortPeople[sortPeople.length - 1] <= limit) {
            sortPeople.shift();
            sortPeople.pop();
            answer++;
        }
        else {
            sortPeople.pop();
            answer++;
        }
    }
    return answer;
};
