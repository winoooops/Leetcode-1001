export function isValid(R: number, C: number, rowAt: number, columnAt: number) {
  return rowAt >= 0 && rowAt < R && columnAt >= 0 && columnAt < C 
}

export function spiralMatrixThree(R: number, C: number, r0: number, c0: number) {
  const result = []
  // 横纵坐标上移动的方向
  const directionOfRow = [1,0,-1,0]
  const directionOfCol = [0,1,0,-1]

  let steps = 0;         // 当前方向上行走的步数
  let maxSteps = 1;      // 当前方向上最多能走几步
  let totalSteps = 1;    // 在操作行走的中部署
  let direction = 0;     // 控制方向: 0 => 向东, 1 => 向南, 2 => 向西, 3 => 向北 
  let change = 0;        // 方向改变计数, 如果等于二 => maxSteps++

  result.push([r0, c0])  // 先把起点推进去

  while(totalSteps < R * C) {
    // 计算横纵坐标的增量
    r0 += directionOfRow[direction % 4]
    c0 += directionOfCol[direction % 4]
    
    // 判断是否在场地内
    if(isValid(R, C, r0, c0)) {
      totalSteps++
      result.push([r0,c0])
    }
    
    // 实际行走的步数都要+1
    steps++

    // 如果行走到最后一步, 调换方向
    if(steps === maxSteps) {
      direction++
      change ++
      steps = 0
    }
    
    // 如果是第二次调换方向, 增加行走步数[1,1,2,2,3,3,4,4,...]
    if(change === 2){
      maxSteps++
      change = 0
    }
  }

  return result
}
