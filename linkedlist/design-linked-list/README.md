# 设计链表

# 设计链表

在链表类中实现这些功能：

* get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
* addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
* addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
* addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
* deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。

### 功能示例

```
const linkedList = new LinkedList();

linkedList.addAtHead(1) // [1]
linkedList.addAtTail(3) // [1,3]
linkedList.addAtIndex(1,2) // [1,2,3]
linkedList.get(1) // 2 
linkedList.deleteAtIndex(1) // [1, 3]
linkedList.get(1) // 3

```
* 链表类的三个私有属性: `head`, `tail`和`size`.
* 利用虚拟头节点找寻指定位置的node
* 注意链表为空时的特殊操作
* 插入节点时注意构建next方向

```typescript 
import { ListNode } from '../linkedlist.types'

export class LinkedList {
    private size: number
    private head: ListNode<number> | null
    private tail: ListNode<number> | null
    
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0 
    }

    get(index: number): number {
        if(index < 0 || index >= this.size) return -1 
        console.log(this.getNode(index))
        return this.getNode(index)?.val
    }

    addAtHead(val: number): void {
        let node: ListNode<number> = new ListNode(val, this.head)
        this.head = node 
        if(this.size === 0) this.tail = node
        this.size++
    }

    addAtTail(val: number): void {
        let node: ListNode<number> = new ListNode(val, null)
        
        if(this.size === 0) {
            this.head = node
        } else {
            this.tail.next = node
        }
        this.tail = node
        this.size++
    }

    addAtIndex(index: number, val: number): void {
        if(index === 0) {
            return this.addAtHead(val)
        }
        if(index === this.size) {
            return this.addAtTail(val)
       }
        if(index > this.size) return 

        let prev: ListNode<number> = this.getNode(index - 1)
        let next: ListNode<number> = prev.next
        prev.next = new ListNode(val, next)
        this.size++
    }

    deleteAtIndex(index: number): void {
        if(index < 0 || index >= this.size) return
        if(index === 0) {
            this.head = this.head.next
            if(!this.head) this.tail = null
            this.size--
            return
        }
        let prev: ListNode<number> = this.getNode(index - 1)
        prev.next = prev.next.next

        if(index === this.size - 1) {
            this.tail = this.getNode(index - 1)
            this.tail.next = null
        }
        this.size -- 
    }

    private getNode(index) {
        let node: ListNode<number> = new ListNode(0, this.head) 
        for(let i = 0 ; i <= index ; i++) {
            node = node.next
        }
        
        return node
    }
}
```

