import { TreeNode } from "../../treenode.type"

let result: number 

export function maxDepth(root: TreeNode | null): number {
  result = 0 
  if(!root) return result
  getDepth(root, 0)
  return result
}

function getDepth(node: TreeNode | null, depth: number) {
  if(!node) return 

  result = depth > result ? depth : result
  console.log(result)

  if(node.left) {
    depth++
    getDepth(node, depth)
    depth-- // 回溯到父节点状态
  }

  if(node.right) {
    depth++
    getDepth(node, depth)
    depth-- // 回溯到父节点状态
  }
  return 
}

