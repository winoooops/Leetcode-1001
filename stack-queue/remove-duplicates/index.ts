export function removeDuplicates(s: string) {
  let stack: string[] = []
  
  for(let i = 0 ; i < s.length ; i++) {
    stack.push(s[i])
    stack = poppin(stack)
  }

  return stack.join("")
}

export function poppin(arr: string[]) {
  if(arr.length < 2) return arr

  if(arr[arr.length - 1] === arr[arr.length - 2]) {
    arr.pop()
    arr.pop()
    poppin(arr)
  }

  return arr
}


export function removeDuplicates2(s: string) {
  let stack: string[] = []

  let i = 0 
  for(let j = 0 ; j < s.length ; j++) {

    if(i > 0 && s[j] === stack[i - 1]) {
      i--
    } else {
      stack[i] = s[j]
      i++
    }
  }

  return stack.join("")
}

export function removeDuplicates3(s: string) {
  let stack: string[] = []

  for(let i of s) {
    if(stack.length > 0 && i === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(i)
    }
  }

  return stack.join("")
}


