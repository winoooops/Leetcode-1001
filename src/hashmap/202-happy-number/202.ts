export function isHappy(n: number): boolean {
  if(n === 1) return true;

  // use set to check infinite loop
  const record: Set<number> = new Set();

  while(n !== 1) {
    let sum = squareSum(n);
    if(sum === 1) {
      return true;
    }
    if(record.has(sum)) {
      return false;
    } else {
      record.add(sum);
    }
    n = sum;
  }

  return false;
}

export function squareSum(n: number): number {
  let sum = 0;

  while(n > 0) {
    const root = n % 10;
    sum += Math.pow(root, 2);
    n = Math.floor(n / 10);
  }

  return sum;
}
