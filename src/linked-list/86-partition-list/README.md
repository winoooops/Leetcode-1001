# 86. Partition List

Given the head of a linked list and a value `x`, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Constraints:

* The number of nodes in the list is in the range [0, 200].
* -100 <= Node.val <= 100
* -200 <= x <= 200



## Example

```
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]
```

```
Input: head = [2,1], x = 2
Output: [1,2]
```

## Solution

### Two Lists
> Time Complexity: `O(n)`, because we iterate through the list once, space complexity: `O(1)` since it only create two new list.

* Maintain Two List, one store the nodes whose values is smaller than `x`, another are all about nodes whose value is bigger than `x`
* iterate through the list, extends the lists accordingly
* finally, merge two list, and return the head of the left list

```ts
export function partition(head: ListNodeLike, x: number): ListNodeLike {
  if(!head) return null;
  let curr: ListNodeLike = head;
  let left: ListNode = new ListNode(-1);
  let right: ListNode = new ListNode(-1);
  let leftNode = left;
  let rightNode = right;

  while(curr) {
    if(curr.val < x) {
      leftNode.next = curr;
      leftNode = leftNode.next;
    } else {
      rightNode.next = curr;
      rightNode = rightNode.next;
    }
    curr = curr.next;
  }
  rightNode.next = null;
  leftNode.next = right.next;

  return left.next;
}
```



