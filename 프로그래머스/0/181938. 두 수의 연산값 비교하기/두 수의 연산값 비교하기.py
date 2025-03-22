def solution(a, b):
    answer = 0
    result1 = str(a) + str(b);
    result2 = 2 * a * b;
    
    if(int(result1) >= result2):
        answer = int(result1);
    else:
        answer = result2;
    
    return answer