export function partitionLabels(s: string): number[] {
  const result: number[] = []; 

  const helper: Map<string, number> = new Map(); 

  for(let i = 0; i < s.length; i++) {
    helper.set(s[i], i)
  }

  let left: number = 0; 
  let right: number = 0; 


  for(let j = 0; j < s.length; j++) {
    right = Math.max(helper.get(s[j]), right);

    if(j === right) {
      result.push(j - left + 1);
      left = right + 1;
    }
  }

  return result;
}
