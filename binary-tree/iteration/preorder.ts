import { TreeNode } from "../treenode.type"

export function preorder(node: TreeNode) {
  const result: number[] = []
  const stack: TreeNode[] = []

  let currNode = node
  stack.push(currNode)

  while(stack.length > 0) {
    currNode = stack.pop()!
    result.push(currNode.val)

    if(currNode?.right) stack.push(currNode.right)
    if(currNode?.left) stack.push(currNode.left)
  }

  return result
}

