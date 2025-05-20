n = int(input())

numbers = list(map(int, input().split()))

def max_sum(n, numbers):
  dp = [0] * n
  dp[0] = numbers[0]

  for i in range(1, n):
    dp[i] = max(dp[i - 1] + numbers[i], numbers[i])

  return max(dp)

print(max_sum(n, numbers))