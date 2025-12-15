function solution(k, m, score) {
    const sorted_score = score.sort((a, b) => b - a);
    const per_box = Math.floor(score.length / m);
    let result = 0;
    
    if (per_box === 0) return 0;
    
    for (let i = 0; i < sorted_score.length; i += m) {
        if (i + m > sorted_score.length) break;
        const sliced_score = sorted_score.slice(i, i + m);
        result += Math.min(...sliced_score) * m;
    }
    return result;
}