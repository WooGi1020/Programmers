function solution(my_string, queries) {
    let arr = [...my_string];
    
    queries.forEach(([i, j]) => {
      const sliced = arr.slice(i, j + 1).reverse();
      arr.splice(i, j - i + 1, ...sliced);
    });

    
    return arr.join("");
}