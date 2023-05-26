export function sortSquares(nums: number[]): number[] {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const length = nums.length 
  const result: number[]= new Array(length)

  let i = 0
  let j = length - 1 
  let k = length - 1

  while(i <= j) {
    if(Math.abs(nums[i]) > Math.abs(nums[j])) {
      result[k] = nums[i] * nums[i]
      i ++
    } else {
      result[k] = nums[j] * nums[j]
      j --
    }
    k--
  }

  return result
}
=======
=======
>>>>>>> parent of ab51a25 (refactor structure of java project and add java solution in array)
  const length = nums.length;
  const result: number[] = [];
=======
  const length = nums.length 
  const result: number[]= new Array(length)
>>>>>>> parent of 1256a90 (some changes but mostly reviewing)

  let i = 0
  let j = length - 1 
  let k = length - 1

  while(i <= j) {
    if(Math.abs(nums[i]) > Math.abs(nums[j])) {
      result[k] = nums[i] * nums[i]
      i ++
    } else {
      result[k] = nums[j] * nums[j]
      j --
    }
    k--
  }

  return result
}
<<<<<<< HEAD

console.log(sortSquares([-4, -1, 0, 3, 10]));
<<<<<<< HEAD
>>>>>>> parent of ab51a25 (refactor structure of java project and add java solution in array)
=======
>>>>>>> parent of ab51a25 (refactor structure of java project and add java solution in array)
=======
>>>>>>> parent of 1256a90 (some changes but mostly reviewing)
