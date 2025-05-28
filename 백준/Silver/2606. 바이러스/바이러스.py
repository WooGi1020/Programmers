n = int(input())
m = int(input())

graph = {i: [] for i in range(1, n + 1)}

for _ in range(m):
  a, b = map(int, input().split())
  graph[a].append(b)
  graph[b].append(a)

def dfs(graph, start, visited):
  visited.add(start)
  for w in graph[start]:
    if w not in visited:
      dfs(graph, w, visited)

visited = set()
dfs(graph, 1, visited)
print(len(visited) - 1)
  