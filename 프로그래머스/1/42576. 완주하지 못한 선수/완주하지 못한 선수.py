def solution(participant, completion):
    count_dict = {}
    
    for name in participant:
        if name in count_dict:
            count_dict[name] += 1
        else:
            count_dict[name] = 1

    for name in completion:
        count_dict[name] -= 1

    for name in count_dict:
        if count_dict[name] > 0:
            return name