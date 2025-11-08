function solution(food) {
    return food.reduce((acc, foo, idx) => {
        if (idx > 0) {
            acc.push(idx.toString().repeat(Math.floor(foo / 2)));
        }
        if (idx === food.length - 1 ) {
            acc.push(`0${[...acc].reverse().join("")}`)
        }
        return acc
    }, []).join("")
    
}