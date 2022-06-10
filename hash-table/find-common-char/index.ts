export function commonChars(words: string[]): string[] {
  const result: string[] = []
  const occurance = new Array(26).fill(0)
  const compare = new Array(26).fill(0)
  const base = "a".charCodeAt(0)


  for(let i of words[0]) {
    occurance[i.charCodeAt(0) - base] ++
  }

  for(let i = 1 ; i < words.length; i++) {
    const word = words[i]
    compare.fill(0)

    for(let char of word) {
      compare[char.charCodeAt(0) - base] ++
    }

    for(let j = 0 ; j < occurance.length ; j++) {
      occurance[j] = Math.min(occurance[j], compare[j])
    }
  }

  for(let n = 0 ; n < occurance.length ; n++) {
    let count = occurance[n]
    while(count > 0) {
      result.push(String.fromCharCode(n+base))
      count --
    }
  }


  return result
}
