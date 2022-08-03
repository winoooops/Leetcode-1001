import { Node } from "./node.type"

export function levelOrder(root: Node | null):number[][] {
  const result: number[][] = []
  const queue: Node[] = []

  let curr: Node = root
  let level: number[] = []
  let levelLenth: number 

  queue.push(curr)

  while(queue.length > 0) {
    levelLenth = queue.length;
    level = []

    for(let i = 0 ; i < levelLenth ; i++) {
      curr = queue.shift()!
      level.push(curr.val)

      while(curr.children.length > 0) {
        queue.push(curr.children.shift()!)
      }
    }
    result.push(level)
  }

  return result
}
