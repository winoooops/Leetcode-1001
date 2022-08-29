export function restoreIPAddresses(s: string): string[] {
  const result: string[] = []

  function backTracking(startIdx: number, path: string[]) {
    if(path.length === 4 && startIdx >= s.length) {
      return result.push(path.join("."))
    }

    for(let i = startIdx ; i < s.length ; i++) {
      const target = s.substring(startIdx, i + 1)

      if(!isValid(target)) continue

      path.push(target)

      backTracking(i + 1, path)

      path.pop()

    }
  }

  backTracking(0, [])

  return result
}

export function isValid(s: string): boolean {
  let res: boolean = true 
  let num: number = Number(s)

  if(s.length === 0 || isNaN(num) || num > 255 || num < 0 || (s.length > 1 && s[0] === "0")) {
    res = false
  }

  return res
}
