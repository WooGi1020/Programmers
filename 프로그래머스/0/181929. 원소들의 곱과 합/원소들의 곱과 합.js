function solution(num_list) {
    const add = (arr) => {
        let result = 1;
        arr.forEach((n) => result *= n)
        return result;
    }
    const sum_add = (arr) => {
        return arr.reduce((acc, n) => acc += n, 0) ** 2
    }
    
    return add(num_list) > sum_add(num_list) ? 0 : 1
}