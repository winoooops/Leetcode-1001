import {Node} from "../Node";
import * as os from "os";

export function connectBFS(root: Node | null): Node | null {
  if(!root) return root;

  // BFS
  const queue: Node[] = [root];

  while(queue.length > 0) {
    const size = queue.length;

    for(let i = 0; i < size; i++) {
      const node = queue.shift()!;
      if(i < size - 1) {
        node.next = queue[0];
      }

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  }

  return root;
}

export function connectBFS2(root: Node | null): Node | null {
  if(!root) return root;

  let current: Node | null = root;

  while(current) {
    let head = new Node(-1);
    let tail = head;

    while(current) {
      // access the list node of last level
      // if left child exists, point the tail to left child
      if(current.left) {
        tail.next = current.left;
        tail = tail.next;
      }
      // if right child exists, point the tail to right child
      if(current.right) {
        tail.next = current.right;
        tail = tail.next;
      }
      // move to next node, this is done by the nested while loop
      current = current.next;
    }

    current = head.next;
  }

  return root;
}
