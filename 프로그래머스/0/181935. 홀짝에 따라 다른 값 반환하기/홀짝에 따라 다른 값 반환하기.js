function solution(n) {
    return n % 2 == 0 ? Array.from({ length: n }, (_, i) => i + 1).reduce((n, m) => n += m % 2 == 0 ? m**2 : 0, 0) : Array.from({ length: n }, (_, i) => i + 1).reduce((n, m) => n += m % 2 == 0 ? 0 : m, 0)
}