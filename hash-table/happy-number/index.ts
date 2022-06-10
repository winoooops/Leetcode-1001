export function isHappy(n: number){
  let sum = calculateSum(n)
  let sumSet: Set<number> = new Set();

  while(sum !== 1 && !sumSet.has(sum)){
    sumSet.add(sum)
    sum = calculateSum(sum)
  }

  return sum === 1;
}

export function calculateSum(n) {
  let sum = 0 

  while(n > 0) {
    sum += Math.pow(n % 10, 2)
    n = Math.floor(n / 10)
  }

  return sum
}

