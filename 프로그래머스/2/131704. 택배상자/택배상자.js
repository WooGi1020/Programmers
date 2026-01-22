function solution(order) {
    let result = 0;
    const sec_belt = [];
    let truck_idx = 0;
    
    for (let box = 1; box <= order.length; box++) {
        sec_belt.push(box);
        
        while (sec_belt.length > 0 && sec_belt.at(-1) === order[truck_idx]) {
            sec_belt.pop();
            truck_idx++;
            result++;
        }
    }
    
    return result;
}