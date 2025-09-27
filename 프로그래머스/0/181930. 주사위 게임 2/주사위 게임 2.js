function solution(a, b, c) {
    const arr = [a, b, c]
    const setSize = new Set(arr).size
    let answer = 0;
    
    const sum = arr.reduce((acc, n) => acc += n, 0);
    const doubleSum = arr.reduce((acc, n) => acc += n**2, 0);
    const trippleSum = arr.reduce((acc, n) => acc += n**3, 0);
    
    if (setSize === 1) {
        answer = sum * doubleSum * trippleSum
    } else if (setSize === 2) {
        answer = sum * doubleSum
    } else {
        answer = sum
    }
    
    return answer
}