function solution(new_id) {
    const id = new_id
        .toLowerCase() 
        .replace(/[^a-z0-9\-_\.]/g, '') 
        .replace(/\.{2,}/g, '.') 
        .replace(/^\.|\.$/g, '') 
        .replace(/^$/, 'a') 
        .slice(0, 15).replace(/\.$/g, ''); 

    const len = id.length;
    return len <= 2 
        ? id + id[len - 1].repeat(3 - len) 
        : id;
}