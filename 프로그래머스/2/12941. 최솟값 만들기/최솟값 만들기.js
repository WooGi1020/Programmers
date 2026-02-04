function solution(A,B){
    const sorted_A = A.sort((a, b) => a - b);
    const sorted_B = B.sort((a, b) => b - a);
    
    return sorted_A.reduce((acc, ele, idx) => {
        const mul = ele * sorted_B[idx];
        return acc + mul
    }, 0)
}