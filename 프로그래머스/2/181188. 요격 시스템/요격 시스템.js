function solution(targets) {
  const sorted_targets = targets.sort((a, b) => a[1] - b[1]);

  let last_shot = 0;
  let count = 0;
  for (let i = 0; i < sorted_targets.length; i++) {
    if (sorted_targets[i][0] >= last_shot) {
      count += 1;
      last_shot = sorted_targets[i][1];
    }
  }

  return count;
}