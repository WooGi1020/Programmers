const gcd = (n, m) => {
  if (m === 0) return n;
  return gcd(m, n % m);
};

const lcm = (n, m) => {
  if (n === 0 || m === 0) return 0;
  return (n / gcd(n, m)) * m;
};

function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}
