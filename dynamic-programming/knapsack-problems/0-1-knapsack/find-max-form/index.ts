export function findMaxForm(strs: string[], m: number, n: number) {
  const dp: number[][] = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0));

  let zeroNum: number;
  let oneNum: number;


  for (let i = 0; i < strs.length; i++) {
    // reset the zeroNum and oneNum
    // dp[i][j] relys on the previous dp item
    zeroNum = 0;
    oneNum = 0;

    for (let c of strs[i]) {
      if (c === '0') zeroNum++
      else oneNum++
    }

    for (let i = m; i >= zeroNum; i--) {
      for (let j = n; j >= oneNum; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1)
      }
    }
  }

  return dp[m][n];
}

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));
console.log(findMaxForm(["10", "0", "1"], 1, 1));