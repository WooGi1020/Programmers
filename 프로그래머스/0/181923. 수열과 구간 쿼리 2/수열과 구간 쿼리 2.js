function solution(arr, queries) {
    let answer = [];
    
    queries.forEach(([start, end, com]) => {
        const compareFunc = (e) => e > com;
        const new_arr = arr.slice(start, end+1).sort((a, b) => a - b);
        const found = new_arr.find(compareFunc);
        answer.push(found !== undefined ? found : -1);
    })
    
    return answer;
}