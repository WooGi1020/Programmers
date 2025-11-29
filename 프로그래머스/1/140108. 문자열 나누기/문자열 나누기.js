function solution(s) {
    let answer = 0;
    let x = null; 
    let same = 0;
    let diff = 0;

    for (let i = 0; i < s.length; i++) {
        if (x === null) {
            x = s[i];
            same++;
            continue;
        }

        if (s[i] === x) same++;
        else diff++;

        if (same === diff) {
            answer++;
            x = null;
            same = 0;
            diff = 0;
        }
    }

    if (x !== null) answer++;

    return answer;
}