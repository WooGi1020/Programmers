function solution(common) {
      const num1 = common[1] - common[0];
      const num2 = common[2] - common[1];

      if (num1 === num2) {
        return common.at(-1) + num1;
      } else {
        const num = common[1] / common[0];
        return common.at(-1) * num;
      }
}