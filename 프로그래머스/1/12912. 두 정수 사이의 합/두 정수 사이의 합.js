function solution(a, b) {
    if (a === b) return a;
    
    return (Math.abs(b - a) + 1) * (a + b) / 2;
}