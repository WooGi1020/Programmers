function solution(num_list) {
    const last = num_list.length
    
    const cal = (first, second) => {
        return first > second ? first - second : 2 * first;
    }
    num_list.push(cal(num_list[last - 1], num_list[last - 2]))
    
    return num_list
    
}