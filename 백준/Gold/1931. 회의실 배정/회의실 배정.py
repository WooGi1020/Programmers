N = int(input())
meetings = [tuple(map(int, input().split())) for _ in range(N)]

# 끝나는 시간 기준 오름차순 정렬, 끝나는 시간이 같으면 시작시간 기준 정렬
meetings.sort(key=lambda x: (x[1], x[0]))

count = 0
end_time = 0

for start, end in meetings:
    if start >= end_time:
        count += 1
        end_time = end

print(count)
