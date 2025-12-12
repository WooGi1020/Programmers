// 최소 힙
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 요소 추가
  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  // 최소값 삭제 및 반환
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  // 상향 이동 (추가 시 정렬)
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      if (this.heap[parentIdx] <= this.heap[index]) break;
      [this.heap[parentIdx], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIdx],
      ];
      index = parentIdx;
    }
  }

  // 하향 이동 (삭제 시 정렬)
  bubbleDown() {
    let index = 0;
    while (true) {
      let leftIdx = 2 * index + 1;
      let rightIdx = 2 * index + 2;
      let smallest = index;

      if (
        leftIdx < this.heap.length &&
        this.heap[leftIdx] < this.heap[smallest]
      ) {
        smallest = leftIdx;
      }
      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx] < this.heap[smallest]
      ) {
        smallest = rightIdx;
      }
      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  size() {
    return this.heap.length;
  }
}

function solution(k, score) {
  const answer = [];
  const minHeap = new MinHeap();

  for (const s of score) {
    if (minHeap.size() < k) {
      minHeap.push(s);
    } else if (minHeap.heap[0] < s) {
      minHeap.pop();
      minHeap.push(s);
    }
    answer.push(minHeap.heap[0]);
  }

  return answer;
}
