function solution(number, limit, power) {
    const count = new Array(number + 1).fill(0)
    
    for (let i = 1; i <= number; i++) {
        for (let j = i; j <= number; j += i) {
            count[j] += 1;
        } 
    }
    
    let answer = 0;
    for (let i = 1; i <= number; i++) {
        answer += count[i] <= limit ? count[i] : power;
    }
    
    return answer;
}