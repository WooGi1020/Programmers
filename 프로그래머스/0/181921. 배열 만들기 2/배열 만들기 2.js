function solution(l, r) {
    const arr = Array.from({ length: r - l + 1 }, (_, i) => i + l);
    
    const filteredArr = arr.filter((num) => [...String(num)].every((n) => n === "0" || n === "5"));
    return filteredArr.length > 0 ? filteredArr : [-1]
}