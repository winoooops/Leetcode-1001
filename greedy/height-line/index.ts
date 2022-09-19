export function reconstructQueue(people: number[][]): number[][] {
  people.sort((a, b) => {
    if(a[0] === b[0]) return a[1] - b[1]
    return b[0] - a[0]
  })

  const queue: number[][] = []

  for(let i = 0; i < people.length; i++) {
    // 根据k来排序
    // 因为同样有k人比people[i]高的情况下, 个子矮的人需要在更前面
    queue.splice(people[i][1], 0, people[i])
  }

  return queue
}
