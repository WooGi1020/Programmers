def can_place(park, size, r, c):
    rows = len(park)
    cols = len(park[0])
    if r + size > rows or c + size > cols:
        return False
    
    for i in range(r, r + size):
        for j in range(c, c + size):
            if park[i][j] != "-1":
                return False
    return True

def solution(mats, park):
    mats.sort(reverse=True)
    
    rows = len(park)
    cols = len(park[0])
    
    for mat in mats:
        for i in range(rows):
            for j in range(cols):
                if park[i][j] == "-1" and can_place(park, mat, i, j):
                    return mat 
                    
    return -1