import heapq
import sys
input = sys.stdin.readline

N = int(input())
lectures = []

for _ in range(N):
    parts = list(map(int, input().split()))
    if len(parts) == 3:
        # 강의번호는 무시하고 시작시간과 종료시간만 사용
        _, start, end = parts
        lectures.append((start, end))

# 시작시간 기준으로 정렬
lectures.sort()

# 최소 힙 생성 (종료 시간을 저장)
heap = []

for start, end in lectures:
    if heap and heap[0] <= start:
        heapq.heappop(heap)  # 가장 빨리 끝나는 강의실 재사용
    heapq.heappush(heap, end)  # 현재 강의 종료 시간 추가

print(len(heap))  # 힙에 남아 있는 종료 시간 수 == 필요한 강의실 수
