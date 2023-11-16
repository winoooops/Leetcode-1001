# 19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.


Constraints:

* The number of nodes in the list is sz.
* 1 <= sz <= 30
* 0 <= Node.val <= 100
* 1 <= n <= sz


## Example

```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

```
Input: head = [1], n = 1
Output: []
```

```
Input: head = [1,2], n = 1
Output: [1]
```

## Solution

### HashMap
> Time Complexity: O(n), because we need to traverse twice; Space Complexity: O(n), because we need to store the nodes in a map.

* traverse through the list, store the node and its index in a map.
* find the previous node and next node of the node to be removed.
* if the previous node is null, the node to be removed is the head, return the next node.

```ts
export function removeNthFromEndHashMap(head: ListNodeLike, n: number): ListNodeLike {
  if(!head) return null;
  const sentinel = new ListNode(0, head);
  sentinel.next = head;

  const helper: Map<number, ListNodeLike> = new Map();
  let current: ListNodeLike = sentinel.next;
  let index: number = 1;
  while(current) {
    helper.set(index, current);
    current = current.next;
    index++;
  }

  let prev = helper.get(index - n - 1);
  let next = helper.get(index - n + 1) || null;
  if(prev) {
    prev.next = next;
  } else {
    sentinel.next = next;
  }
  return sentinel.next;
}
```

### Iteration
> Time Complexity is O(n), because we need to traverse twice; Space Complexity is O(1), because we don't need to store the nodes.

```ts
export function removeNthFromEndIteration(head: ListNodeLike, n: number): ListNodeLike {
  if(!head) return null;
  const sentinel = new ListNode(0, head);
  sentinel.next = head;
  let size = 0;
  let current: ListNodeLike = sentinel.next;
  while(current) {
    size++;
    current = current.next;
  }
  let prev: ListNode = sentinel;
  for(let i = 0; i < size - n; i++) {
    prev = prev.next as ListNode;
  }
  prev.next = prev?.next?.next || null;

  return sentinel.next;
}
```

### Stack
> Time Complexity is O(n), because we need to traverse twice; Space Complexity is O(n), because we need to store the nodes in a stack.

```ts
export function removeNthNodeFromEndStack(head: ListNodeLike, n: number): ListNodeLike {
  if(!head) return null;
  const sentinel = new ListNode(0, head);
  sentinel.next = head;
  const stack: ListNode[] = [];
  let current: ListNodeLike = sentinel;
  while(current) {
    stack.push(current);
    current = current.next;
  }
  for(let i = 0; i < n; i++) {
    stack.pop();
  }
  let prev = stack.pop()!
  prev.next = prev.next?.next || null;

  return sentinel.next;
}
```

### Improved Iteration: Two Pointers

