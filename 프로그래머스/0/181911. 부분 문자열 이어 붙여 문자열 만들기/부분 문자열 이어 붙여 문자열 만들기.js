function solution(my_strings, parts) {
    return parts.reduce((bucket, [start, end], index) => {
        const sliced = my_strings[index].slice(start, end + 1);
        bucket.push(sliced)
        return bucket;
    }, []).join("")
}