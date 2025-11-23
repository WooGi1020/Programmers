const park = ["SOO", "OXX", "OOO"];
const routes = ["E 2", "S 2", "W 1"];

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const direction = {
  E: 0,
  W: 1,
  S: 2,
  N: 3,
};

const find2DIndex = (arr, target) => {
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === target) {
        return [row, col]; // 찾는 즉시 반환 및 종료
      }
    }
  }
};

function solution(park, routes) {
  const [startRow, startCol] = find2DIndex(park, "S");

  return routes.reduce(
    (acc, ele) => {
      const [dir, dis] = ele.split(" ");
      const stepX = dx[direction[dir]];
      const stepY = dy[direction[dir]];

      let canMove = true;
      let nx = acc[0];
      let ny = acc[1];

      for (let i = 0; i < dis; i++) {
        nx += stepX;
        ny += stepY;

        if (
          nx < 0 ||
          ny < 0 ||
          nx >= park.length ||
          ny >= park[0].length ||
          park[nx][ny] === "X"
        ) {
          canMove = false;
          break;
        }
      }

      if (canMove) {
        acc[0] = nx;
        acc[1] = ny;
      }

      return acc;
    },
    [startRow, startCol]
  );
}
