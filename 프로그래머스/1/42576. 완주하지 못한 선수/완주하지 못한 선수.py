def solution(participant, completion):
    count_dict = {}
    temp = 0
    
    for name in participant:
        count_dict[int(hash(name))] = name
        temp += int(hash(name))

    for name in completion:
        if int(hash(name)) in count_dict:
            temp -= int(hash(name))

    return count_dict[temp]