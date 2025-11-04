function solution(a, b, n) {
    let empty_bottle = n;
    let answer = 0;
    
    while (empty_bottle >= a) {
        const new_bottles = Math.floor(empty_bottle / a) * b;
        const remain = empty_bottle % a;
        empty_bottle = new_bottles + remain;
        answer += new_bottles;
    }
    
    return answer;
}