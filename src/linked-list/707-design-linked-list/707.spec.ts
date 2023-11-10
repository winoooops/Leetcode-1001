import {LinkedListFactory} from "./707";

describe('707. Design Linked List', () => {
  describe('Test One directional Linked List', () => {
    it('testcase 1', function () {
      const MyLinkedList = LinkedListFactory(1) ;
      MyLinkedList.addAtHead(1);
      MyLinkedList.addAtTail(3);
      MyLinkedList.addAtIndex(1, 2)

      expect(MyLinkedList.get(0)).toBe(1);
      expect(MyLinkedList.get(1)).toBe(2);
      expect(MyLinkedList.get(2)).toBe(3);

      MyLinkedList.deleteAtIndex(1);

      expect(MyLinkedList.get(0)).toBe(1);
      expect(MyLinkedList.get(1)).toBe(3);
    });

    it('testcase 2', function () {
      const MyLinkedList = LinkedListFactory(1) ;
      MyLinkedList.addAtHead(7);
      expect(MyLinkedList.get(0)).toBe(7);
      MyLinkedList.addAtHead(2);
      expect(MyLinkedList.get(0)).toBe(2);
      expect(MyLinkedList.get(1)).toBe(7);
      MyLinkedList.addAtHead(1);
      expect(MyLinkedList.get(0)).toBe(1);
      expect(MyLinkedList.get(1)).toBe(2);
      expect(MyLinkedList.get(2)).toBe(7);

      MyLinkedList.addAtIndex(3, 0);
      expect(MyLinkedList.get(3)).toBe(0);
      MyLinkedList.deleteAtIndex(2);
      expect(MyLinkedList.get(2)).toBe(0);
      //[1,2,0]

      MyLinkedList.addAtHead(6);
      // [6,1,2,0]
      MyLinkedList.addAtTail(4);
      // [6,1,2,0,4]
      expect(MyLinkedList.get(4)).toBe(4)
      MyLinkedList.addAtHead(4);
      // [4,6,1,2,0,4]
      MyLinkedList.addAtIndex(5,0);
      // [4,6,1,2,0,0,4]
      expect(MyLinkedList.get(5)).toBe(0);
      expect(MyLinkedList.get(6)).toBe(4);
    });
  })
})
