n = int(input())

grid = [list(map(int, input().strip())) for _ in range(n)]

def dfs(x, y):
    if x < 0 or x >= n or y < 0 or y >= n or grid[x][y] == 0:
        return 0
        
    grid[x][y] = 0
    count = 1
    count += dfs(x - 1, y)
    count += dfs(x + 1, y)
    count += dfs(x, y - 1)
    count += dfs(x, y + 1)
    return count

def count_apartments():
    apartment_counts = []
    for i in range(n):
        for j in range(n):
            if grid[i][j] == 1:
                count = dfs(i, j)
                apartment_counts.append(count)
    
    return sorted(apartment_counts)

apartment_counts = count_apartments()
print(len(apartment_counts))
for count in apartment_counts:
    print(count)