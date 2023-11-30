# 82. Remove Duplicates from Sorted List II

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. 

Return the linked list sorted as well.

Constraints:

* The number of nodes in the list is in the range [0, 300].
* -100 <= Node.val <= 100
* The list is guaranteed to be sorted in ascending order.

## Example

```
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
```

```
Input: head = [1,1,1,2,3]
Output: [2,3]
```

## Solution

### Iteration
> Time Complexity: `O(n)`, Space Complexity: `O(1)`

```ts
export function removeDuplicatesIteration(head: ListNodeLike): ListNodeLike {
  if(!head) return null;
  let sentinel = new ListNode(0, head);
  let prev = sentinel;
  let curr = sentinel.next;
  while(curr) {
    while(curr.next && curr.val === curr.next.val) {
      curr = curr.next;
    }
    if(prev.next !== curr) {
      prev.next = curr.next;
    } else {
      // make sure when the duplicates are deleted, the prev is still the same
      prev = prev.next as ListNode;
    }
    curr = curr.next;
  }

  return sentinel.next;
}
```

### Recursion
> Time Complexity: `O(n)`, Space Complexity: `O(n)`

* When should the recursion end? When the current node is null or the next node is null, return the current node.
* Inside each recursion: 
  * If the current node and the next node are the same, find the last duplicated node and return the next node of the last duplicated node.
  * If the current node and the next node are not the same, return the next node of the current node.

```ts
export function removeDuplicatesRecursion(head: ListNodeLike): ListNodeLike {
  if(!head || !head.next) return head;

  if(head.next && head.val === head.next.val) {
    // find the last duplicated node
    while(head.next && head.val === head.next.val) {
      head = head.next;
    }
    // return the next node of the last duplicated node
    return removeDuplicatesRecursion(head.next);
  } else {
    // return the next node of the current node
    head.next = removeDuplicatesRecursion(head.next);
  }

  return head;
}
```








