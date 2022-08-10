import { TreeNode } from "../treenode.type"


export function binaryPaths(root: TreeNode | null): string[] {
  const result: string[] = []
  if(!root) return result

  findPath(root, "", result)
  return result
}

function findPath(node: TreeNode | null, path: string, paths: string[]) {
  if(!node.left && !node.right) {
    path += node.val
    paths.push(path)
    return 
  }

  path += node.val + "->"

  // path为父系节点传递过来的路径, 这里实质用的是回溯的思想
  node?.left && findPath(node.left, path, paths)
  node?.right && findPath(node.right, path, paths)
}
