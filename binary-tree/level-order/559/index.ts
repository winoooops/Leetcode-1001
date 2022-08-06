import { Node } from "../429/node.type"

export function maxDepth(root: Node | null): number {
  let depth:number = 0
  let curr: Node | null = root;
  let lvlen: number 
  const queue: Node[] = []

  if(!curr) return depth
  
  queue.push(curr)

  while(queue.length > 0) {
    lvlen = queue.length; 
    depth++
    
    for(let i = 0; i < lvlen; i++) {
      curr = queue.shift()!
      while(curr.children.length > 0) {
        queue.push(curr.children.shift())
      }
    }
  }

  return depth
}
