import { TreeNode } from "../../binary-tree/treenode.type"

export type StateCode = 0 | 1 | 2; 

export function minCameraCover(root: TreeNode | null): number {
  // 1 => isCamera 
  // 2 => covered 
  // 0 => not covered 
  //
  let cameras: number = 0; 

  function recur(node: TreeNode | null): StateCode {
    if(node === null) return 2 

    let left = recur(node.left);
    let right = recur(node.right);



    if(left === 0 || right === 0) {
      cameras++;
      return 1;
    } else if(left === 1 || right === 1) {
      return 2;
    } else {
      return 0;
    }
  }

  if(recur(root) === 0) {
    cameras++
  }

  return cameras;
}
