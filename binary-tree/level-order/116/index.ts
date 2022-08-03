import { Node } from "./node.type"

export function connect(root: Node): Node {
  const queue: Node[] = []
  let curr: Node = root
  let prev: Node 
  let len: number 

  queue.push(curr)

  while(queue.length > 0) {
    len = queue.length
    prev = null
    for(let i = 0 ; i < len ; i++) {
      if(i === 0) {
        curr = queue.shift()!
        prev = curr
      } else {
        curr = queue.shift()!
        prev.next = curr 
        prev = curr
      }

      curr?.left && queue.push(curr.left)
      curr?.right && queue.push(curr.right)
    }

    prev.next = null
  }

  return root
}
