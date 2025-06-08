def solution(numbers, target):
    current_sum = 0
    
    def dfs(index, current_sum):
        if index == len(numbers):
            if current_sum == target:
                return 1
            else:
                return 0

        return dfs(index + 1, current_sum + numbers[index]) +  dfs(index + 1, current_sum - numbers[index])

    return dfs(0, current_sum)

