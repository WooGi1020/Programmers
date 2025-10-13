function solution(my_string, index_list) {
    let answer = [];
    const strArr = my_string.split("");
    
    index_list.forEach((index) => {
        answer.push(strArr[index])
    })
    
    return answer.join("");
}