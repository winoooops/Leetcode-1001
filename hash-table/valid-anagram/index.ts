export function validAnagram(s: string, t: string) {
  if(!s.length) return false

  const letters = new Array(26).fill(0)

  const aPos = "a".charCodeAt(0)
  

  for(let i of s) {
    letters[i.charCodeAt(0) - aPos]++
  }

  for(let j of t) {
    letters[j.charCodeAt(0) - aPos]--
  }

  return letters.every(count => count === 0)
}
