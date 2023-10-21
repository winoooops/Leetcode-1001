export function threeSum(numbers: number[]) {
  numbers.sort((a, b) => a - b);
  const results: number[][] = [];
  let sum: number;

  for(let x = 0; x < numbers.length - 2; x++) {
    if(x > 0 && numbers[x] === numbers[x - 1]) continue;

    let y = x + 1;
    let z = numbers.length - 1;
    while(y < z) {
      sum = numbers[x] + numbers[y] + numbers[z];
      if(sum === 0) {
        results.push([numbers[x], numbers[y], numbers[z]])
        while(numbers[y+1] === numbers[y]) y++;
        while(numbers[z-1] === numbers[z]) z--;
        y++;
        z--;
      }
      if(sum < 0) y++;
      if(sum > 0) z--;
    }
  }

  return results;
}
