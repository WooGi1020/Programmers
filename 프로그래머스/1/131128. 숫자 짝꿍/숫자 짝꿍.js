function solution(X, Y) {
  const countX = new Array(10).fill(0);
  const countY = new Array(10).fill(0);

  for (const char of X) countX[Number(char)]++;
  for (const char of Y) countY[Number(char)]++;

  let answer = "";

  for (let i = 9; i >= 0; i--) {
    const commonCount = Math.min(countX[i], countY[i]);
    answer += String(i).repeat(commonCount);
  }

  if (answer === "") return "-1";
  if (answer[0] === "0") return "0"; 

  return answer;
}