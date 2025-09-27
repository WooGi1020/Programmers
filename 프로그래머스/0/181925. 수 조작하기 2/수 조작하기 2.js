function solution(numLog) {
    let answer = '';
    const op = {
        '1' : 'w',
        '-1' : 's',
        '10' : 'd',
        '-10' : 'a'
    }
    
    numLog.forEach((n, i) => {
        if(i !== numLog.length - 1) {
            answer += op[String((numLog[i + 1] - n))]
        }
    })
    return answer;
}