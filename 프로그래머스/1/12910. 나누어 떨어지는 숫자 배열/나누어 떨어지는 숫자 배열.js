function solution(arr, divisor) {
    const filtered =  arr.filter((ele) => ele % divisor === 0).sort((a, b) => a - b);
    return filtered.length !== 0 ? filtered : [-1]
}