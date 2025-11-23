const findAllFile = (wallpaper) => {
  let fileLocations = [];
  for (let row = 0; row < wallpaper.length; row++) {
    for (let col = 0; col < wallpaper[0].length; col++) {
      if (wallpaper[row][col] === "#") fileLocations.push([row, col]);
    }
  }
  return fileLocations;
};

function solution(wallpaper) {
  const locations = findAllFile(wallpaper);

  let min_row;
  let min_col;
  let max_row;
  let max_col;

  for (let i = 0; i < locations.length; i++) {
    const [row, col] = locations[i];

    if (i == 0) {
      min_col = col;
      min_row = row;
      max_col = col;
      max_row = row;
    } else {
      if (min_row > row) min_row = row;
      if (min_col > col) min_col = col;
      if (max_row < row) max_row = row;
      if (max_col < col) max_col = col;
    }
  }

  return [min_row, min_col, max_row + 1, max_col + 1];
}
