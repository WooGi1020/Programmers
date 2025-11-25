function solution(keymap, targets) {
  return targets.reduce((acc, str) => {
    let count = 0;

    for (const char of [...str]) {
      let arr = [];

      keymap.forEach((element) => {
        const n = Number([...element].findIndex((ele) => ele === char));
        arr.push(n !== -1 ? n + 1 : -1);
      });

      if (arr.every((s) => Number(s) === -1)) {
        count = -1;
        break;
      } else if (arr.some((s) => Number(s) === -1))
        count += Math.min(...arr.filter((s) => Number(s) !== -1));
      else count += Math.min(...arr);
    }

    acc.push(count);
    return acc;
  }, []);
}