from collections import defaultdict, deque

n, m = map(int, input().split())

graph = defaultdict(list)

for _ in range(m):
    u, v = map(int, input().split())
    graph[u].append(v)

in_degree = [0] * (n + 1)
for u in range(1, n + 1):
    for v in graph[u]:
        in_degree[v] += 1

queue = deque()
for i in range(1, n + 1):
    if in_degree[i] == 0:
        queue.append(i)

result = []
while queue:
    node = queue.popleft()
    result.append(node)
    for neighbor in graph[node]:
        in_degree[neighbor] -= 1
        if in_degree[neighbor] == 0:
            queue.append(neighbor)

print(*result)
