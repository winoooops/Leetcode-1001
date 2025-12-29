# 206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.



## Example

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

```
Input: head = [1,2]
Output: [2,1]
```

```
Input: head = []
Output: []
```


## Solution

> The key is to change the `next` direction, not the node itself

### Iteration
* declare `prev` and `curr` to points to the previous node and current node while traversing through the linked list
  * save `curr.next` as `tmp`, change the `next` pointer of `curr` into `prev`;
  * `prev = curr` 
  * `curr = tmp`

```ts
export function reverseList(head: ListNodeLike): ListNodeLike {
  if(!head) return null;
  let curr: ListNodeLike = head;
  let prev: ListNodeLike = null;
  let temp: ListNodeLike;
  while(curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}
```
### Recursion
