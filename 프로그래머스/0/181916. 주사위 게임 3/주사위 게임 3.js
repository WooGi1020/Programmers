function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    const set = new Set(arr);
    const sameCount = set.size;
    let result = 0;
    
    const { single, double, triple } = getEachCount(arr);
    console.log(single, double, triple);
    
    if (sameCount === 1) {
        result = 1111 * arr[0]
    } else if (sameCount === 2) {
        if (triple.length === 1) {
            result = (10 * triple[0] + single[0]) ** 2
        } else if (double.length === 2) { 
            result = (double[0] + double[1]) * (Math.abs(double[0] - double[1]))
        } 
    } else if (sameCount === 3) {
        result = single[0] * single[1]
    } else if (sameCount === 4) {
        arr.sort((a, b) => a - b);
        result = arr[0];
    }
    return result;
}

function getEachCount(arr) {
    const count = {};
    arr.forEach((e) => {
        count[String(e)] = (count[String(e)] || 0) + 1; 
    })
    
    const single = Object.entries(count).filter(([_, val]) => val === 1).map(([key]) => Number(key))
    const double = Object.entries(count).filter(([_, val]) => val === 2).map(([key]) => Number(key))
    const triple = Object.entries(count).filter(([_, val]) => val === 3).map(([key]) => Number(key))
    
    return { single, double, triple }
}