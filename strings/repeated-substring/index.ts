export function repeatedSubstring(s: string) {
  const len = s.length 
  const next = getNext(s)
  const suffixLengh = next[len - 1] + 1
  
  return suffixLengh === 0 ? false : len % (len - (next[len -1] + 1)) === 0 
}

export function getNext(s: string): number[] {
  const next: number[] = []

  let start = -1 
  next.push(start)

  for(let i = 1; i < s.length ; i++){

    while(start > -1 && s[start+1] !== s[i]) {
      start = next[start]
    }

    if(s[start+1] === s[i]) {
      start++
    }

    next.push(start)
  }

  return next
}


export function repeatedSubstringII(s: string) {
  const length = s.length;

  // 特殊情况: 长度
  if(length === 1) return false
  if(length === 2) return s[0] === s[1]

  // 特殊情况: 单个字母
  if(s[0] === s[length - 1]) {
    if(s[0].repeat(length) === s) {
      return true
    }
  }

  // 判断3个条件
  for(let i = 1 ; i < length / 2 ; i++) {
    if(s[i] === s[length - 1] && length % (i + 1) === 0 && s.slice(0, i + 1).repeat(length/(i+1)) === s) {
      return true
    }

  }

  return false
}


export function repeatedSubStringIII(s: string) {
  let length = s.length 

  let step = 1 
  let head = s.substring(0, step)

  while(step <= length / 2) {
    if(head.repeat(length / step) === s) {
      return true
    }
    step++
    head = s.substring(0, step)
  }

  return false
}
