import { TreeNode } from "../../treenode.type"

export function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = []
  const helperQueue: TreeNode[] = []

  let curr: TreeNode = root

  helperQueue.push(curr)

  while(helperQueue.length > 0) {
    let level: number[] = []
    let length = helperQueue.length 

    for(let i = 0 ; i < length; i++){
      curr = helperQueue.shift()!
      level.push(curr.val);

      curr?.left && helperQueue.push(curr.left)
      curr?.right && helperQueue.push(curr.right)
    }
    result.push(level);
  }
  return result
}
