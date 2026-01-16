function solution(friends, gifts) {
    const matrix = new Array(friends.length);
    const nextMonthGifters = new Array(friends.length).fill(0);
    const giftScore = new Array(friends.length).fill(0);
    
    for (let i = 0; i < friends.length; i++) {
        matrix[i] = new Array(friends.length).fill(0);
        matrix[i][i] = -1;
    }
    
    for (const gift of gifts) {
        const [a, b] = gift.split(" ");
        matrix[friends.indexOf(a)][friends.indexOf(b)] === -1 ? matrix[friends.indexOf(a)][friends.indexOf(b)] = 1 : matrix[friends.indexOf(a)][friends.indexOf(b)] += 1;
    }
    
    for (let i = 0; i < friends.length; i++) {
        let give = 0;
        let receive = 0;

        for (let j = 0; j < friends.length; j++) {
            if (matrix[i][j] > 0) give += matrix[i][j];
            if (matrix[j][i] > 0) receive += matrix[j][i];
        }
        giftScore[i] = give - receive;
    }
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            if (i === j) continue;
            
            if (matrix[i][j] > matrix[j][i]) nextMonthGifters[i] += 1;
            else if (matrix[i][j] < matrix[j][i]) nextMonthGifters[j] += 1;
            else {
                if (giftScore[i] > giftScore[j]) nextMonthGifters[i] += 1;
                else if (giftScore[i] < giftScore[j]) nextMonthGifters[j] += 1;
                else continue;
            }
        }
    }

    return Math.max(...nextMonthGifters)
}