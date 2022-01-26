export const removeDuplicates = (list: number[]): number => {
  let i: number = 0

  for (let j = 1; j < list.length; j++) {
    if (list[j] !== list[i]) {
      i++
      list[i] = list[j]
    }
  }
  return i + 1
}


console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))