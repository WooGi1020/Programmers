function solution(number) {
    let comb_arr = [];
    for (let i = 0; i < number.length - 2; i++) {
        for (let j = i + 1; j < number.length - 1; j++) {
            for (let k = j + 1; k < number.length; k++) {
               comb_arr.push([number[i], number[j], number[k]])
            }
        }
    }
    
    return comb_arr.reduce((acc, [a, b, c]) => {
        if (a + b + c === 0) {
            acc += 1
        } 
        return acc;
    }, 0)
}