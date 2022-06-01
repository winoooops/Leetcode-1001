export function groupAnagram(strs: string[]) {
  /* const base = "a".charCodeAt(0)
  const map = new Map() 

  for(const word of strs) {
    let letters = new Array(26).fill(0)
    
    for(let i of word) {
      letters[i.charCodeAt(0) - base]++
    }
    
    let occurance = letters.toString()

    map.has(occurance) ? map.get(occurance).push(word) : map.set(occurance, [word])
  }

  return Array.from(map.values()) */

  const obj = strs.reduce((prev, curr) => {
    let key = curr.split('').sort().toString()
    prev[key] ? prev[key].push(curr): prev[key] = [curr]
    return prev
  },{})

  return Object.values(obj)
}
