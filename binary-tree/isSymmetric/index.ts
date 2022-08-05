import { TreeNode } from "../treenode.type"

export function isSymmetric(root: TreeNode) {
  if(!root) return true
  const dequeue: TreeNode[] = []

  let leftNode: TreeNode | null = root.left
  let rightNode: TreeNode | null = root.right

  dequeue.unshift(leftNode)
  dequeue.push(rightNode)

  while(dequeue.length > 0) {
    if(!leftNode && !rightNode) return true
    if(!leftNode || !rightNode || leftNode?.val !== rightNode?.val) return false 

    leftNode = dequeue.shift()
    rightNode = dequeue.pop()

    dequeue.unshift(leftNode?.right)
    dequeue.push(rightNode?.left)

    dequeue.unshift(leftNode?.left)
    dequeue.push(rightNode?.right)
  }

  return true
}
