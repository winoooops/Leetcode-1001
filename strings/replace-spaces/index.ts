export function replaceSpace(s: string): string {
  const strArr = Array.from(s);
  const oldLen = strArr.length;

  let count = 0 

  for(let i = 0 ; i < oldLen ; i++) {
    if(strArr[i] === ' ') count++
  }

  let left = oldLen - 1 
  let right = strArr.length + 2 * count - 1

  while(left >= 0) {
    if(strArr[left] !== ' ') {
      strArr[right--] = strArr[left--]
    } else {
      strArr[right--] = '0';
      strArr[right--] = '2';
      strArr[right--] = '%';
      left--
    }
  }
 
  return strArr.join('');
}
