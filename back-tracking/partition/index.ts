export function partition(s: string): string[][] {
  const result: string[][] = []
  if(!s.length) return result 

  function backTracking(startIdx: number, path: string[]) {
    if(startIdx >= s.length) {
      result.push([...path])
      return 
    }

    for(let i = startIdx ; i < s.length ; i++) {
      if(!isPalidome(s, startIdx, i)) {
        continue
      }

      path.push(s.substring(startIdx, i + 1))
      backTracking(i + 1, path)
      path.pop()
    }
    
  }

  backTracking(0, [])
  return result
}

export function isPalidome(s: string, left: number, right: number) {
    while(left < right) {
        if(s[left] !== s[right]) return false 
        left++
        right--
    }
    return true 
}

