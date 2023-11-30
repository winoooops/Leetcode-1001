# 61. Rotate List

Given the head of a linked list, rotate the list to the right by k places.

Constraints:

* The number of nodes in the list is in the range [0, 500].
* -100 <= Node.val <= 100
* 0 <= k <= 2 * 109

## Example

```
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
```

```
Input: head = [0,1,2], k = 4
Output: [2,0,1]
```


## Solution
### Using Loop

* find the length of the linked list, if the length is 0 or 1, or k is 0, then return the head
* find the number of operations needed to be done, which is `length - k % length`
* make a loop by linking the tail node to the head node
* go to the node that is `length - k % length` steps away from the tail node, and cut off the link
* return the next node of the current node

```ts
export function rotateRight(head: ListNodeLike, k: number): ListNodeLike {
  if(!head || k === 0 || !head.next) return head;
  let curr = head;
  let length = 1;
  while(curr.next) {
    length++;
    curr = curr.next;
  }

  // find out how many operations need to happen
  let n = length - k % length;
  if(n === length) return head;

  // making a loop
  curr.next = head;

  // go to the last node
  while(n > 0) {
    curr = curr.next as ListNode;
    n--;
  }

  // cut off the link
  let next = curr.next
  curr.next = null;

  return next;
}
```
