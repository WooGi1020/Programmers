import sys

input = sys.stdin.readline
output = sys.stdout.write

n = int(input())

a = set()

for _ in range(n):
  a.add(input().rstrip())

a = list(a)
a.sort(key=lambda x: (len(x), x))

for i in range(len(a)):
  output(a[i] + "\n")