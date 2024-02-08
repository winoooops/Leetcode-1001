import {TreeNode} from "./TreeNode";

export class Node  {
  val: number;
  next: Node | null;
  left: Node | null;
  right: Node | null;

  constructor(val: number, left?: Node | null, right?: Node | null, next?: Node | null) {
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
    this.next = next ? next : null;
  }

  static createTree(arr: (number | null)[]): Node | null {
    if(arr[0] === null || arr.length === 0) return null;
    const root = new Node(arr[0]);
    let i = 1;
    let isLeft = true;
    const stack = [root];
    while(i < arr.length && stack.length > 0) {
      let node = stack[0];
      const child = arr[i] === null ? null : new Node(arr[i] as number);
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
