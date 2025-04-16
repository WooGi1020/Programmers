import sys
from functools import cmp_to_key

input = sys.stdin.readline
output = sys.stdout.write

n = int(input())
file_dict = {}

for _ in range(n):
  a = input().strip().split('.')[1]
  if a in file_dict:
      file_dict[a] += 1
  else:
      file_dict[a] = 1

file_list = list(file_dict.items())

file_list.sort(key=lambda x: x[0])

for _ in range(len(file_list)):
  output(str(file_list[_][0] + " " + str(file_list[_][1]) + '\n'))