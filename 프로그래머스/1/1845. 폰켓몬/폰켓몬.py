def solution(nums):
    answer = 0
    pocket_set = set()
    
    for num in nums:
        pocket_set.add(num)
    
    if len(nums) // 2 < len(pocket_set):
        answer = len(nums) // 2
    else:
        answer = len(pocket_set)
    
    return answer