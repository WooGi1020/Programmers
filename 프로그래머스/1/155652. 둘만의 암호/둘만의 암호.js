function shiftChar(c, n) {
    const code = c.charCodeAt(0);
    const base = code >= 97 ? 97 : 65;
    const shifted = ((code - base + n) % 26) + base;
    return String.fromCharCode(shifted);
}

function skipShift(c, skipSet, remain) {
    if (remain === 0) return c;

    const next = shiftChar(c, 1);

    if (skipSet.has(next)) {
    return skipShift(next, skipSet, remain); 
    }

    return skipShift(next, skipSet, remain - 1);
}

function solution(s, skip, index) {
    const skipSet = new Set(skip);
    let answer = '';

    for (const char of s) {
    answer += skipShift(char, skipSet, index);
    }

    return answer;
}