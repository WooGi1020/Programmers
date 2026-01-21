function solution(numbers, hand) {
    const cols = 3;
    let left_position = [3, 0];
    let right_position = [3, 2];
    
    const grid_map = new Map(
        Array.from({ length: 9 }, (_, i) => {
        const key = i + 1;
        const r = Math.floor(i / cols); 
        const c = i % cols;           
    
        return [key, [r, c]];
    })).set(0, [3, 1])
        
    return numbers.map((ele, idx) => {
        if (idx === 3) console.log(left_position, right_position)
        const now_key = grid_map.get(ele);
        if (ele === 1 || ele === 4 || ele === 7) {
            left_position[0] = now_key[0];
            left_position[1] = now_key[1];
            return 'L';
        }
        else if (ele === 3 || ele === 6 || ele === 9) {
            right_position[0] = now_key[0];
            right_position[1] = now_key[1];
            return 'R';
        } else {
            if (Math.abs(now_key[0] - left_position[0]) + Math.abs(now_key[1] - left_position[1]) > Math.abs(now_key[0] - right_position[0]) + Math.abs(now_key[1] - right_position[1])) {
            right_position[0] = now_key[0];
            right_position[1] = now_key[1];
            return 'R';
        } else if (Math.abs(now_key[0] - left_position[0]) + Math.abs(now_key[1] - left_position[1]) < Math.abs(now_key[0] - right_position[0]) + Math.abs(now_key[1] - right_position[1])) {
            left_position[0] = now_key[0];
            left_position[1] = now_key[1];
            return 'L';
        } else {
            if (hand === 'right') {
                right_position[0] = now_key[0];
                right_position[1] = now_key[1]; 
                return 'R';
            } else {
                left_position[0] = now_key[0];
                left_position[1] = now_key[1];
                return 'L';
            }
        }
        }
    }).join("");
}

// [2, 0], [3, 2] = L
// [2, 0], [3, 1] = R
// [2, 1], [3, 1] = L
// [0, 1], [3, 1] = L
// [2, 1]