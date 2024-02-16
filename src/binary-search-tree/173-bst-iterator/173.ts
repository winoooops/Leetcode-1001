import {TreeNode} from "../../binary-tree/TreeNode";


export class BSTIterator {
  stack: TreeNode[];

  constructor(root: TreeNode) {
    this.stack = [];
    let curr: TreeNode | null = root;
    while(curr) {
      this.stack.push(curr);
      curr = curr.left;
    }
  }

  next() {
    const node =this.stack.pop()!;
    let curr = node.right;
    while(curr) {
      this.stack.push(curr);
      curr = curr.left;
    }
    return node.val;
  }

  hasNext() {
    return this.stack.length > 0;
  }
}

export class BSTIteratorRecursion {

}
