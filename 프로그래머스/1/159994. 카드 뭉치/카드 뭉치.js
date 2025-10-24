const isSequential = (arr) =>
  arr.every((num, i) => i === 0 || num === arr[i - 1] + 1);

function solution(cards1, cards2, goal) {
    // water가 drink 보다 먼저 사용되어야 한다 -> water는 drink보다 무조건 나중에 온다.
    let cards1_idx = [], cards2_idx = [];
    
    goal.forEach((g) => {
        const cards1_word = cards1.findIndex((word) => word === g)
        const cards2_word = cards2.findIndex((word) => word === g)
        if (cards1_word !== -1) {
            cards1_idx.push(cards1_word);
        } else {
            cards2_idx.push(cards2_word);
        }
    })
    
    if (isSequential(cards1_idx) && isSequential(cards2_idx)) return "Yes";
    return "No";
}
