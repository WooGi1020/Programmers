function solution(num_list) {
    let odd = '';
    let even = '';
    
    num_list.forEach((n) => {
        n % 2 !== 0 ? odd += String(n) : even += String(n)
    })
    
    return Number(odd) + Number(even);
}