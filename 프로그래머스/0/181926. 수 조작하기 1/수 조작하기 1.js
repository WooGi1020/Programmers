function solution(n, control) {
    let new_n = n;
    control.split('').forEach((c) => {
        switch(c){
            case "w": 
                new_n += 1
                break
            case "s": 
                new_n -= 1
                break
            case "d": 
                new_n += 10
                break
            case "a": 
                new_n -= 10
                break
        }
    })
    return new_n;
}