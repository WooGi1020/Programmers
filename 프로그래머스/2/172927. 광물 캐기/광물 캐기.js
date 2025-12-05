function solution(picks, minerals) {
  let answer = 0;

  const picksStr = [
    [1, 1, 1],
    [5, 1, 1],
    [25, 5, 1],
  ];

  const totalPicks = picks.reduce((acc, cur) => acc + cur, 0);
  if (totalPicks === 0) return 0;
  const usableMinerals = minerals.slice(0, totalPicks * 5);

  const groups = [];
  for (let i = 0; i < usableMinerals.length; i += 5) {
    const chunk = usableMinerals.slice(i, i + 5);
    const diamondCnt = chunk.filter((v) => v === "diamond").length;
    const ironCnt = chunk.filter((v) => v === "iron").length;
    const stoneCnt = chunk.filter((v) => v === "stone").length;

    groups.push({ diamondCnt, ironCnt, stoneCnt });
  }

  groups.sort((a, b) => {
    if (a.diamondCnt !== b.diamondCnt) return b.diamondCnt - a.diamondCnt;
    if (a.ironCnt !== b.ironCnt) return b.ironCnt - a.ironCnt;
    return b.stoneCnt - a.stoneCnt;
  });

  for (const group of groups) {
    let pickIdx = -1;
    if (picks[0] > 0) {
      picks[0]--;
      pickIdx = 0;
    } else if (picks[1] > 0) {
      picks[1]--;
      pickIdx = 1;
    } else if (picks[2] > 0) {
      picks[2]--;
      pickIdx = 2;
    }

    answer +=
      group.diamondCnt * picksStr[pickIdx][0] +
      group.ironCnt * picksStr[pickIdx][1] +
      group.stoneCnt * picksStr[pickIdx][2];
  }

  return answer;
}