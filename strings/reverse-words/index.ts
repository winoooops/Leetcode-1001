export function delExSpaces(str: string[]) {
  const len = str.length;

  let l: number = 0;
  let r: number = 0;

  while(r < len) {
    // 去除字符串头部多余的空格 
    if(l === 0 && str[r] === " ") {
      r++
      continue;
    }

    // 去除字符串中间多余的空格
    if(r > 1 && str[r] === " " && str[r-1] === " ") {
      r++
      continue;
    }
    str[l++] = str[r++]
  }

  // 去除字符串末尾多余的空格, 此时l指针为数组的最后一位
  if(l > 1 && str[l - 1] === " ") {
    str.length = l - 1
  } else{
    str.length = l
  }

  return str
}

export function reverse(str: string[], left: number, right: number) {
  let tmp: string
  
  while(left < right) {
    tmp = str[left]
    str[left] = str[right]
    str[right] = tmp

    left++
    right--
  }
}


export function reverseWords(str: string) {
  let strArr = str.split('');
  let result = delExSpaces(strArr);
  reverse(result, 0, result.length - 1)

  let l = 0 
  let r = 0 

  while(r < result.length) {
    while(result[r] !== " " && r < result.length) r++ 
    reverse(result, l, r - 1)
    l = r + 1 
    r = r + 1
  }

  return result.join("")
}
