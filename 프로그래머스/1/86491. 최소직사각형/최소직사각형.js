function solution(sizes) {
    let rows = [];
    let cols = [];
    
    for (const [row, col] of sizes) {
        if (row < col) {
            rows.push(col);
            cols.push(row);
        } else {
            rows.push(row);
            cols.push(col);
        }
    }
    
    return Math.max(...cols) * Math.max(...rows);
}