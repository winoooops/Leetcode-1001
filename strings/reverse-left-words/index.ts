export function reverseLeftWords(s: string, k: number) {
  const arr = s.split("")

  // 反转前n
  reverse(arr, 0, k - 1)
  // 反转n到末尾
  reverse(arr, k, arr.length - 1)
  // 反转整体
  reverse(arr, 0, arr.length - 1)
  
  return arr.join("")
}

function reverse(arr: string[], start: number, end: number) {
  let tmp: string;

  while(start < end) {
    tmp = arr[start]
    arr[start] = arr[end]
    arr[end] = tmp 

    start++
    end--
  }
}
