function solution(n, m, section) {
  let can_paint = 0;

  return section.reduce((acc, ele) => {
    if (can_paint < ele) {
      can_paint = ele + m - 1;
      acc += 1;
    }

    return acc;
  }, 0);
}