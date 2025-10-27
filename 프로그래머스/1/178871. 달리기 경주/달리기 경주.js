function solution(players, callings) {
    const indexMap = new Map();
    players.forEach((player, i) => indexMap.set(player, i));

    for (const call of callings) {
        const currIdx = indexMap.get(call);
        const prevIdx = currIdx - 1;
        
        if (prevIdx < 0) continue;
        
        [players[currIdx], players[prevIdx]] = [players[prevIdx], players[currIdx]];
        
        indexMap.set(players[currIdx], currIdx);
        indexMap.set(players[prevIdx], prevIdx);
    }
    
    return players;
}