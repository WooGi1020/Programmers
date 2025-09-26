function solution(code) {
    let mode = true;
    let ret = '';
    code.split('').forEach((n, i) => {
    if (!isNaN(Number(n))) {
      mode = !mode;
    } else {
      if (mode && i % 2 === 0) {
        ret += n;
      } else if (!mode && i % 2 !== 0) {
        ret += n;
      }
    }
  });

  return ret === '' ? "EMPTY" : ret;
}