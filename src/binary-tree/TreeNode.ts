export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }

  static createTree(arr: (number | null)[]): TreeNode | null {
    if(arr[0] === null || arr.length === 0) return null;
    const root = new TreeNode(arr[0]);
    let i = 1;
    let isLeft = true;
    const stack = [root];
    while(i < arr.length && stack.length > 0) {
      let node = stack[0];
      const child = arr[i] === null ? null : new TreeNode(arr[i] as number);
      if(isLeft) {
        node.left = child;
      } else {
        node.right = child;
        stack.shift();
      }
      child && stack.push(child);
      i++;
      isLeft = !isLeft;
    }

    return root;
  }
}
