const days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

// 2, 4, 6, 9, 11
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

function solution(a, b) {
  let dayCount = 0;

  if (a !== 1) {
    for (let i = 1; i < a; i++) {
    dayCount += Number(month[i]);
    }
  }

  dayCount += b;
  return days[Number(dayCount) % 7];
}