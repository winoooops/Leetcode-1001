export function BinarySearch(nums: Number[], target: Number) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 1256a90 (some changes but mostly reviewing)
  const length = nums.length  
  
  let left = 0 
  let right = length - 1 
<<<<<<< HEAD

  while(left < right) {
    let middle = Math.floor((left + right) / 2)

    if(nums[middle] === target ) return middle

    if(nums[middle] < target) {
      left = middle + 1
    } else {
      right = middle 
    }
  } 

  return -1 

  let left = 0 
  left right = length - 1
  return -1
}
=======
=======
>>>>>>> parent of ab51a25 (refactor structure of java project and add java solution in array)
  if (!target && target !== 0) return -1;
=======
>>>>>>> parent of 1256a90 (some changes but mostly reviewing)

  while(left < right) {
    let middle = Math.floor((left + right) / 2)

    if(nums[middle] === target ) return middle

    if(nums[middle] < target) {
      left = middle + 1
    } else {
      right = middle 
    }
  } 

  return -1 

<<<<<<< HEAD
  return -1;
<<<<<<< HEAD
}
>>>>>>> parent of ab51a25 (refactor structure of java project and add java solution in array)
=======
}
>>>>>>> parent of ab51a25 (refactor structure of java project and add java solution in array)
=======
  let left = 0 
  left right = length - 1
  return -1
}
>>>>>>> parent of 1256a90 (some changes but mostly reviewing)
