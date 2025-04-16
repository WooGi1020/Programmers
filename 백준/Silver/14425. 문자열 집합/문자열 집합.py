import sys

input = sys.stdin.readline
output = sys.stdout.write

n, m = map(int, input().strip().split())

str_set = set()
for _ in range(n):
  a = input().strip()
  str_set.add(a)

count = 0

for _ in range(m):
  a = input().strip()
  if a in str_set:
    count += 1

output(str(count))