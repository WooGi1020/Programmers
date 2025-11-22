def solution(s):
    result = [-1] * len(s)
    
    for i, c in enumerate(s):
        for j in range(i - 1, -1, -1):
            if s[j] == c:
                result[i] = i - j  
                break

    return result