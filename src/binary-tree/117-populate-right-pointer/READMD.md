# 117. Populating Next Right Pointers in Each Node II
```
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.



## Example

```
Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
```

```
Input: root = []
Output: []
```

## Solution

### BFS   

> Time complexity is O(n), space complexity is O(n)

* use a queue to store the nodes in the same level, and use a dummy node to store the previous node in the same level.   
* noted, when we pop the node from the queue, it's essential to first store the queue's size(because it will change in the loop) 
  * we should connect the previous node to the current node.
  * if the current node has left or right child, we should push them into the queue.  

```ts
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
```

## BFS but without queue

> Time complexity is O(n), space complexity is O(1), because we don't use queue to store the nodes in the same level.

in the previous solution, we used queue on each level, 
but we can use the next pointer to connect the nodes in the same level.

specifically, we can sort of see each level as a linked list, 
and we can use the next pointer to connect the nodes in the same level. 

![117](/static/img/binary-tree/117.png)

```ts
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
```


### DFS
