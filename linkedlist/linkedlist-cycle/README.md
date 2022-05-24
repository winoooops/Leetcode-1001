# 环形列表I

给你一个链表的头节点 head ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
* 注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
* 不可以修改给定的链表

如果链表中存在环 ，则返回 true 。 否则，返回 false 。

## 示例

![cycle](../../static/img/linkedlist/cycle.png)


## 如何判断链表是否有环

**可以使用快慢指针法，分别定义 fast 和 slow 指针，从头结点出发，fast指针每次移动两个节点，slow指针每次移动一个节点，如果 fast 和 slow指针在途中相遇 ，说明这个链表有环.**

![animation](../../static/img/linkedlist/cycle.gif)

## 如果有环, 如何找到入口

![logic](../../static/img/linkedlist/logic.png)

那么相遇时： slow指针走过的节点数为: x + y， fast指针走过的节点数： x + y + n (y + z)，n为fast指针在环内走了n圈才遇到slow指针， （y+z）为 一圈内节点的个数A。

因为fast指针是一步走两个节点，slow指针一步走一个节点， 所以 fast指针走过的节点数 = slow指针走过的节点数 * 2：

(x + y) * 2 = x + y + n (y + z)

两边消掉一个（x+y）: x + y = n (y + z)

因为要找环形的入口，那么要求的是x，因为x表示 头结点到 环形入口节点的的距离。

所以要求x ，将x单独放在左面：x = n (y + z) - y ,

再从n(y+z)中提出一个 （y+z）来，整理公式之后为如下公式：x = (n - 1) (y + z) + z 注意这里n一定是大于等于1的，因为 fast指针至少要多走一圈才能相遇slow指针。

这个公式说明什么呢？

先拿n为1的情况来举例，意味着fast指针在环形里转了一圈之后，就遇到了 slow指针了。

当 n为1的时候，公式就化解为 x = z，

这就意味着，从头结点出发一个指针，从相遇节点 也出发一个指针，这两个指针每次只走一个节点， 那么当这两个指针相遇的时候就是 环形入口的节点。

也就是在相遇节点处，定义一个指针index1，在头结点处定一个指针index2。

让index1和index2同时移动，每次移动一个节点， 那么他们相遇的地方就是 环形入口的节点。
![logic](../../static/img/linkedlist/logic.gif)

### 解题思路

因为如果快慢指针相遇, 那么一定是在环的中间(不在换的末尾), 所以
```typescript 
export function detectCycle(head: ListNode<number>): ListNode<number> | null {
  if(!head || !head.next) return null;
  let slow = head
  let fast = head
  
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next 
    
    if(slow === fast) {
      slow = head
      while(slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow 
    }
  }
    
  return null
}
```

```typescript 
export function detectCycleTwo(head: ListNode<number> | null): ListNode<number> | null {
  if(!head || !head.next) return null;
  let slow = head.next
  let fast = head.next.next

  while(fast!== slow) {
    if(!fast || !fast.next ) return null;
    slow = slow.next;
    fast = fast.next.next; 
  }
  slow = head;
  while (fast !== slow) {
      slow = slow.next;
      fast = fast.next;
  }
  return slow;
}
```

