export function getNext(str: string) {
  const next: number[] = []
  const len = str.length

  let left = 0 
  next.push(left)

  for(let right = 1; right < len ; right++) {

    while(left > 0 && str[left] !== str[right]) {
      left = next[left - 1]
    }


    if(str[left] === str[right]) {
      left++
    }

    next.push(left)
  }

  console.log(next)

  return next
}


export function strStr(haystack: string, needle: string) {
  if(haystack.length === 0) return 0

  const next = getNext(needle);

  // 模式串的指针
  let j = 0 

  // 循环遍历文本串
  for(let i = 0; i < haystack.length ; i++) {
    while(j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1]
    }

    if(haystack[i] === needle[j]) {
      if(j === needle.length - 1) {
        return i - j
      }
      j++
    }
  }

  return -1
}
