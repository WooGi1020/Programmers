from bisect import bisect_left, bisect_right
import sys

input = sys.stdin.readline
output = sys.stdout.write

n, m = map(int, input().split())
lines = []

for i in range(n):
  lines.append(int(input().strip()))

lines.sort()
answer = 0
start = 1
end = lines[-1]

while start <= end:
  mid = (start + end) // 2

  count = 0
  for line in lines:
    count += line // mid

  if count >= m:
    answer = mid
    start = mid + 1
  else:
    end = mid - 1

output(str(answer))