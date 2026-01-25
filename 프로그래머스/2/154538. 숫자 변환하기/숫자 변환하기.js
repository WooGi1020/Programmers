function solution(x, y, n) {
    if (x === y) return 0;

    let head = 0;
    const queue = [[y, 0]]; 
    const visited = new Set(); 
    visited.add(y);

    while (queue.length > 0) {
        const [curr, count] = queue.shift();

        const nextStates = [curr - n];
        if (curr % 2 === 0) nextStates.push(curr / 2);
        if (curr % 3 === 0) nextStates.push(curr / 3);

        for (const next of nextStates) {
            if (next === x) return count + 1; 

            if (next > x && !visited.has(next)) {
                visited.add(next);
                queue.push([next, count + 1]);
            }
        }
    }

    return -1; 
}