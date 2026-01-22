function solution(n) {
    const len = (n).toString(2).split('1').length - 1;
    let count = n + 1;
    let answer;
    
    while(count) {
        const count_len = (count).toString(2).split('1').length - 1;
        
        if (len === count_len) {
            answer = count;
            break;
        } else {
            count++;
        }
    }
    return answer;
}