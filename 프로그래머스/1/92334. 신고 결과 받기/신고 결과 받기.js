function solution(id_list, report, k) {
    const members = new Map();
    const id_map = new Map();
    let answer = new Array(id_list.length).fill(0);
    
    id_list.forEach((id, idx) => {
        members.set(id, new Set());
        id_map.set(id, idx);
    })
    
    for (const reporting of report) {
        const [reporter, reported] = reporting.split(" ");   
        members.get(reported).add(reporter)
    }
    
    id_list.forEach((ele, idx) => {
        const reporters = members.get(ele);
        if (reporters.size >= k) {
            for (const reporter of reporters) {
                answer[id_map.get(reporter)] += 1;
            }
        }
    })
    
    return answer;
}