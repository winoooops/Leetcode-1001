export function canCompleteCircuit(gas: number[], cost: number[]): number {
  let curSum: number = 0
  let totalSum: number = 0 
  let start: number = 0 

  for(let i = 0; i < cost.length; i++) {
    curSum += gas[i] - cost[i]
    totalSum += gas[i] - cost[i]

    if(curSum < 0) {
      start = i + 1 
      curSum = 0 
    }
  }

  if(totalSum < 0) return -1 
  return start
}
