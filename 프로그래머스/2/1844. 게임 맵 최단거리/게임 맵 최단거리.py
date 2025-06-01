from collections import deque

def solution(maps):
  n = len(maps)
  m = len(maps[0])

  if maps[0][0] == 0 or maps[n - 1][m - 1] == 0:
    return -1

  directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

  queue = deque([(0, 0, 1)])
  visited = set([(0, 0)])

  while queue:
    x, y, dist = queue.popleft()

    if x == n - 1 and y == m - 1:
      return dist

    for dx, dy in directions:
      nx, ny = x + dx, y + dy

      if 0 <= nx < n and 0 <= ny < m and maps[nx][ny] == 1 and (nx, ny) not in visited:
        visited.add((nx, ny))
        queue.append((nx, ny, dist + 1))

  return -1