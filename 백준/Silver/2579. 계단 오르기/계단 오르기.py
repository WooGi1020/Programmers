n = int(input())
st = [int(input()) for _ in range(n)]

def go_stair(n, st):
    if n == 1:
        return st[0]
    if n == 2:
        return st[0] + st[1]

    dp = [0] * n
    dp[0] = st[0]
    dp[1] = st[0] + st[1]
    dp[2] = max(st[0] + st[2], st[1] + st[2])

    for i in range(3, n):
        dp[i] = max(dp[i-2] + st[i], dp[i-3] + st[i-1] + st[i])

    return dp[n-1]

print(go_stair(n, st))
