function solution(arr) {
    var stk = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (stk.length === 0){
            stk.push(arr[i]);
        } else {
            if (stk.length && stk.at(-1) < arr[i]) {
                stk.push(arr[i]);
            } else {
                stk.pop();
                i -= 1;
            }
        }

    }
    
    return stk;
}