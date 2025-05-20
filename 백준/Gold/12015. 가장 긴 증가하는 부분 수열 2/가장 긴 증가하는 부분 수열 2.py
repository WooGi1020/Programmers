import bisect

n = int(input())

numbers = list(map(int, input().split()))

def lis2(n, numbers):
  sub = []  

  for num in numbers:
      idx = bisect.bisect_left(sub, num)
      if idx == len(sub):
          sub.append(num)  
      else:
          sub[idx] = num   

  return len(sub)

print(lis2(n, numbers))