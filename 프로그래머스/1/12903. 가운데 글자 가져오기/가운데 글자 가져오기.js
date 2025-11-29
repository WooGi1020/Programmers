function solution(s) {
    const ban = s.length / 2;
   return s.length % 2 === 0 ? s.slice(ban - 1, ban + 1) : s[Math.floor(ban)] 
}