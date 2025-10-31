function solution(t, p) {
    let num_arr = [];
    for (let i = 0; i < t.length - p.length + 1; i++) {
        num_arr.push(t.slice(i, i + p.length));
    }
    
    return num_arr.reduce((acc, num) => {
        if (Number(num) <= Number(p)) acc += 1;
        return acc;
    }, 0)
}