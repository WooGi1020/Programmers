function solution(number) {
    return number.split("").reduce((num, acc) => num += Number(acc), 0) % 9;
}