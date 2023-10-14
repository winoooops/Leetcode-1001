export function isPalindrome(s: string):boolean {
  if(s.length === 1) return true;

  const str:string = s.replace(/[^a-zA-Z0-9/s]/g, '').toLowerCase()
  let left = 0;
  let fast = str.length - 1;

  while(left < fast) {
    if(str.charCodeAt(left++) !== str.charCodeAt(fast--)) return false;
  }

  return true;
}
