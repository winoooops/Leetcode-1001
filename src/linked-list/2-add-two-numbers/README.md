# 2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. 

The digits are stored in reverse order, and each of their nodes contains a single digit. 

Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Constraints:

* The number of nodes in each linked list is in the range [1, 100].
* 0 <= Node.val <= 9
* It is guaranteed that the list represents a number that does not have leading zeros.

## Example

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

```
Input: l1 = [0], l2 = [0]
Output: [0]
```

```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

## Solution

* use a dummy node `head` as sentinel node, and a constant `carry` to store the number needs to be pass down to next sum
* iterate through `l1` and `l2` 

```ts
export function addTwoNums(l1: ListNodeLike, l2: ListNodeLike): ListNodeLike {
  if(!l1 && !l2) return null;

  let head = new ListNode(0);
  let curr = head;
  let carry: number = 0;

  while(l1 || l2 || carry) {
    let sum = carry;
    if(l1) {
      sum += l1.val;
      l1 = l1.next
    }

    if(l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    let newNode= new ListNode(sum % 10)
    curr.next = newNode
    curr = newNode;
  }
  return head.next;
}
```

