function solution(arr1, arr2) {
    return arr1.reduce((acc, ele, idx) => {
        const ele2 = arr2[idx]
        acc.push(ele.map((num, idx) => {
            return num + ele2[idx];
        }))
        return acc;
    }, [])
}