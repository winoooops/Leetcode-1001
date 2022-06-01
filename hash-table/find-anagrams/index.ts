export function findAnagram(s: string, p: string) {
  const result: number[] = []
  
  if(p.length > s.length) return result 

  let left = 0 
  let right = 0 

  const occurance: { [key: string]: number } = {}

  let count = 0 
  let missingChars = 0 

  // 统计出现次数
  for(let char of p) {
    if(!occurance[char]) {
      occurance[char] = 1
      missingChars++
    } else {
      occurance[char]++
    }
  }


  while(right < s.length) {
    const char = s[right++]

    // 如果字母出现, 需要判断次数: 只有当次数清零之后才算某个字母补全
    if(--occurance[char] === 0) {
      count++
    }

    while(count === missingChars) {
      if(right - left === p.length) result.push(left)
      
      let leftChar = s[left++]      
      // 在转移到下一个字母之前, 需要回复初始状态 
      if(++occurance[leftChar] > 0) count--
    }
  }

  return result

}

