n = int(input());

def cal(a, b):
  while b != 0:
    r = a % b
    a = b
    b = r

  return a

def calculate(n):
  a = []

  for _ in range(n):
    num1, num2 = map(int, input().split())
    result = num1 * num2 // cal(num1, num2)
    a.append(result)
  
  return a
  
list = calculate(n)

for i in range(len(list)):
  print(list[i], end = "\n")
