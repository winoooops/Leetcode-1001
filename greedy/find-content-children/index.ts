export function findContentChildren(g: number[], s: number[]): number {
  let result: number = 0 

  g.sort((a,b) => a - b)
  s.sort((a, b) => a - b)

  let biscuit: number 
  let index: number = g.length - 1

  while(s.length > 0) {
    biscuit = s.pop()!

    while(biscuit < g[index]) {
      index--
    }

    if(index >=0 ){
      result++
      index--
    }
  }
  
  return result
}
