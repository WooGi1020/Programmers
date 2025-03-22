count = int(input());

arr = [];

for i in range(count):
  a, b = input().split();
  a = int(a);
  result = '';

  for char in b:
    result += char * a;
  arr.append(result);

print('\n'.join(arr))
    

