export function removeElement(nums: Number[], target: Number) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  if(nums.length === 0 ) return 0 
  
  let index = 0 

  for(let j = index ; j < nums.length ; j++) {
    // if the numer checks out, replace it at the current index
    if(nums[j] !== target ) {
      nums[index] = nums[j]
      index++
    }
    // if the numer equals to target, simply ignore it, so that it could be replaced later
  }
  return index
}
=======
=======
>>>>>>> parent of ab51a25 (refactor structure of java project and add java solution in array)
  let length = nums.length;
=======
  if(nums.length === 0 ) return 0 
  
  let index = 0 
>>>>>>> parent of 1256a90 (some changes but mostly reviewing)

  for(let j = index ; j < nums.length ; j++) {
    // if the numer checks out, replace it at the current index
    if(nums[j] !== target ) {
      nums[index] = nums[j]
      index++
    }
    // if the numer equals to target, simply ignore it, so that it could be replaced later
  }
<<<<<<< HEAD

  return left;
<<<<<<< HEAD
}
>>>>>>> parent of ab51a25 (refactor structure of java project and add java solution in array)
=======
}
>>>>>>> parent of ab51a25 (refactor structure of java project and add java solution in array)
=======
  return index
}
>>>>>>> parent of 1256a90 (some changes but mostly reviewing)
