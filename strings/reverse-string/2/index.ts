export function reverseStr(s: string, k: number): string {
  let l: number 
  let r: number
  let arr: string[] = s.split("");
  let tmp: string;

  for(let i = 0; i < s.length ; i += 2 * k) {
    l = i 
    r = i + k - 1 > s.length ? s.length - 1 : i + k - 1; 

    while(l < r) {
      tmp = arr[l]
      arr[l] = arr[r]
      arr[r] = tmp;

      l++
      r--
    }
  }
  return arr.join("");
}
