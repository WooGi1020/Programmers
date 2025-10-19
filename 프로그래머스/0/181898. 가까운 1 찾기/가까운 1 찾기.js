function solution(arr, idx) {
    return arr.findIndex((s, i) => s === 1 && i >= idx);
}