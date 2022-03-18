export const strStr = (haystack: string, needle: string): number => {
  if (needle === '') return 0
  for (let i = 0; i + needle.length <= haystack.length; i++) {
    let flag = true
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = false
        break;
      }
    }
    if (flag) return i
  }

  return -1
}

console.log(strStr('hello', 'll'))