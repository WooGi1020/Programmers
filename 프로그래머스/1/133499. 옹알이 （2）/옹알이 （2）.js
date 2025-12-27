function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  
  return babbling.filter((s) => {
    for (const word of words) {
      if (s.includes(word.repeat(2))) return false;
    }

    let temp = s;
    for (const word of words) {
        temp = temp.split(word).join(" ");
    }

    return temp.trim().length === 0;
  }).length;
}