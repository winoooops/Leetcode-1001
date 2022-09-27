export function monoIncreaseDigits(n: number): number {
  const strNum: number[] = []

  while(n >= 1) {
    strNum.push(n % 10);
    n = Math.floor(n / 10);
  }

  let flag: number;

  for(let i = 0; i < strNum.length; i++) {
    if(i > 0 && strNum[i] > strNum[i - 1]) {
      strNum[i]--;
      strNum[i-1] = 9;
      flag = i - 2
    }
  }

  while(flag >= 0) {
    strNum[flag] = 9
    flag--
  }

  return Number(strNum.reverse().join(""))
}
