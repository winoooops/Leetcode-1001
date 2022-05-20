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
