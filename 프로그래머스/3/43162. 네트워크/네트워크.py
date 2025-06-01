def solution(n, computers):
    m = len(computers[0])
    visited = [False] * n
    count = 0
    for i in range(n):
        if not visited[i]:
            count += 1
            stack = [i]
            while stack:
                node = stack.pop()
                if not visited[node]:
                    visited[node] = True
                    for j in range(m):
                        if computers[node][j] == 1 and not visited[j]:
                            stack.append(j)
    return count

