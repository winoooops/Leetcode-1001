import {ListNode} from "../ListNode";
import {reverseListIteration, reverseListRecursion} from "./206";

describe('206. Reverse Linked List', () => {
  describe("Solution: Iteration", function () {
    it('should be [5,4,3,2,1]', function () {
      const head = ListNode.createListNodeFromArray([1,2,3,4,5]);
      const expected = ListNode.createListNodeFromArray([5,4,3,2,1]);
      expect(reverseListIteration(head)).toEqual(expected);
    });

    it('should be [1,2]', function () {
      const head = ListNode.createListNodeFromArray([1,2]);
      const expected = ListNode.createListNodeFromArray([2,1]);
      expect(reverseListIteration(head)).toEqual(expected);
    });

    it('should be []', function () {
      const head = ListNode.createListNodeFromArray([]);
      const expected = ListNode.createListNodeFromArray([]);
      expect(reverseListIteration(head)).toEqual(expected);
    });
  })


  describe("Solution: Recursion", function () {
    it('should be [5,4,3,2,1]', function () {
      const head = ListNode.createListNodeFromArray([1,2,3,4,5]);
      const expected = ListNode.createListNodeFromArray([5,4,3,2,1]);
      expect(reverseListRecursion(head)).toEqual(expected);
    });

    it('should be [1,2]', function () {
      const head = ListNode.createListNodeFromArray([1,2]);
      const expected = ListNode.createListNodeFromArray([2,1]);
      expect(reverseListRecursion(head)).toEqual(expected);
    });

    it('should be []', function () {
      const head = ListNode.createListNodeFromArray([]);
      const expected = ListNode.createListNodeFromArray([]);
      expect(reverseListRecursion(head)).toEqual(expected);
    });
  })
})
