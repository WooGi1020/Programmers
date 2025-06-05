n = int(input())

money = list(map(int, input().split()))

money.sort(reverse=True)

total = 0

for i in range(n):
  total += money[i] * (i + 1)

print(total)

