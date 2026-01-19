function solution(answers) {
    const answer_one = [1, 2, 3, 4, 5];
    const answer_two = [2, 1, 2, 3, 2, 4, 2, 5];
    const answer_three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const scores = answers.reduce((acc, ele, idx) => {
        if (answer_one[idx % answer_one.length] === ele) acc[0] += 1;
        if (answer_two[idx % answer_two.length] === ele) acc[1] += 1;
        if (answer_three[idx % answer_three.length] === ele) acc[2] += 1;
        return acc;
    }, [0, 0, 0]);

    const maxScore = Math.max(...scores);

    if (maxScore === 0) return [];

    const result = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) {
            result.push(i + 1);
        }
    }

    return result;
}