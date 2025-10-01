function solution(arr, queries) {
  let answer = arr; 
  
  queries.forEach(([start, end, k]) => {
    for (let i = start; i <= end; i++) {
      if (i % k === 0) {
        answer[i] += 1;
      }
    }
  });
  
  return answer;
}