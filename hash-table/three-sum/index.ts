export function threeSum(nums: number[]): number[][] {
  const result = []

  nums.sort((a,b) => a - b)

  for(let i = 0; i < nums.length; i++) {
    // 如果当前最小的数字就大于0, 直接返回
    if(nums[i] > 0) return result

    // 如果数字重复(排序后一定在一起), 跳过
    if(i > 0 && nums[i] === nums[i-1]) continue;

    // 快慢指针
    let l = i + 1 
    let r = nums.length - 1 

    while(l < r) {
      let sum = nums[i] + nums[l] + nums[r]

      if(sum > 0) {
        r--
      }
      else if (sum < 0) {
        l++
      }

      else {
        result.push([nums[i], nums[l], nums[r]])
        l++
        r--
        // 去重
        while(nums[r] === nums[r+1]){
          r--
        }

        while(nums[l] === nums[l -1]) {
          l++
        }

      }
    }

  }

  return result
}
