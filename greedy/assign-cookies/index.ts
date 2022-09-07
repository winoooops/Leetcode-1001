export function findContentChildren(g: number[], s: number[]): number {
  let result: number = 0 

  g.sort((a,b) => a - b)
  s.sort((a, b) => a - b)

  let biscuitPointer: number = s.length - 1 
  let childPointer: number = g.length - 1

  while(biscuitPointer >= 0 && childPointer >=0) {
    if(s[biscuitPointer] >= g[childPointer]) {
      result++
      biscuitPointer--
    }
    childPointer--
  }
  
  return result
}
