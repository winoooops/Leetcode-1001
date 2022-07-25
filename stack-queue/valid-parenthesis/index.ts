export function isValid(s: string): boolean {
  let pairMap: Map<string, string> = new Map() 
  pairMap.set(")", "(")
  pairMap.set("]", "[")
  pairMap.set("}", "{")


  let targetArr: string[] = []

  for(let char of s) {
    let leftFound = pairMap.get(char)

    if(!leftFound) {
      targetArr.push(char)
    } else {
      let lastChar = targetArr.pop()
      if(lastChar !== leftFound) {
        return false 
      }
    }
  }

  return targetArr.length === 0 
}
