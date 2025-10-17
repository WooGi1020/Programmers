function solution(intStrs, k, s, l) {
    let answer = [];
    intStrs.forEach((str) => {
        const slicedNum = [...str].slice(s, s + l).join("");
        if (slicedNum > k) answer.push(Number(slicedNum));
    })
    
    return answer;
}