def solution(a, b):
    answer = 0
    result1 = str(a) + str(b);
    result2 = 2 * a * b;
    
    answer = max(int(result1), result2)
    return answer