function solution(name, yearning, photo) {
    const scoreObj = {};
    name.forEach((eachName, idx) => {
        scoreObj[eachName] = yearning[idx];
    })
    
    return photo.map((persons) => {
        return persons.reduce((sum, person) => {
            return sum + (scoreObj[person] || 0);
        }, 0)
    })
}