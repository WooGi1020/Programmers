function solution(n, w, num) {
    const rowCount = Math.ceil(n / w);
    let answer = 0;
    
    const matrix = Array.from({length: rowCount}, (_, i) => {
        const inner =  Array.from({ length: w }, (_, j) => {
            const value = i * w + 1 + j;
            return value <= n ? value : 0;
        });
        if (i % 2 === 1) return inner.reverse();
        return inner;
    })
    const flatMatrix = matrix.flat();
    const idx = flatMatrix.findIndex(n => n === num);
    const rowIdx = Math.floor(idx / w);
    const colIdx = idx % w;
    
    for (let i = rowCount - 1; i >= rowIdx; i--) {
        if (matrix[i][colIdx] !== 0) answer++;
    }
    
    return answer;
}