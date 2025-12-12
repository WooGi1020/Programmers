function solution(ingredient) {
  let hamburger = [];
  let count = 0;

  for (const ing of ingredient) {
    hamburger.push(ing);

    const len = hamburger.length;
    if (len >= 4) {
      if (
        hamburger[len - 4] === 1 &&
        hamburger[len - 3] === 2 &&
        hamburger[len - 2] === 3 &&
        hamburger[len - 1] === 1
      ) {
        hamburger.pop();
        hamburger.pop();
        hamburger.pop();
        hamburger.pop();
        count += 1;
      }
    }
  }
  return count;
}