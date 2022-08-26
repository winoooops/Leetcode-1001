export function letterCombinations(digits: string): string[] {
  const digitMap: Map<string, string[]> = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]]
  ])

  const result: string[] = []

  function backTracking(index: number, path: string[]) {
    if (index > digits.length) return

    if (path.length === digits.length) {
      return result.push(path.join(""))
    }

    const letters = digitMap.get(digits[index])

    for (let i = 0; i < letters.length; i++) {
      path.push(letters[i])
      backTracking(index + 1, path)
      path.pop()
    }
  }

  if (digits === "") return result
  backTracking(0, [])
  return result
};