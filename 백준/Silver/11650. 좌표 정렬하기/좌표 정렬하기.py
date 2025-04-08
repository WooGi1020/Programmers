import sys

input = sys.stdin.readline
output = sys.stdout.write

n = int(input())

a = []

for _ in range(n):
  a.append(list(map(int, input().split())))

a.sort(key=lambda x: (x[0], x[1]))

for i in range(len(a)):
  output(str(a[i][0]) + " " + str(a[i][1]) + "\n")