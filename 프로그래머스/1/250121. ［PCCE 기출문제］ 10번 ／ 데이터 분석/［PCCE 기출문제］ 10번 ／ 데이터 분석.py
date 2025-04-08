def solution(data, ext, val_ext, sort_by):
    a = ['code', 'date', 'maximum', 'remain']
    
    ext_idx = a.index(ext)
    sort_idx = a.index(sort_by)
    
    answer = [ele for ele in data if int(ele[ext_idx]) < int(val_ext)]
    
    answer.sort(key=lambda x: int(x[sort_idx]))
    
    return answer
