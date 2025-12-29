import {ListNode} from "../ListNode";
import {removeDuplicatesIteration, removeDuplicatesRecursion} from "./82";

describe('82. Remove Duplicates from Sorted List II', () => {
  describe("Solution: Iteration", function () {
    it('should be [1,2,5]', function () {
      const head = ListNode.createListNodeFromArray([1,2,3,3,4,4,5])
      const expected = ListNode.createListNodeFromArray([1,2,5])
      expect(removeDuplicatesIteration(head)).toEqual(expected);
    });

    it('should be [2,3]', function () {
      const head = ListNode.createListNodeFromArray([1,1,1,2,3])
      const expected = ListNode.createListNodeFromArray([2,3])
      expect(removeDuplicatesIteration(head)).toEqual(expected);
    });
  });

  describe("Solution: Recursion", function () {
    it('should be [1,2,5]', function () {
      const head = ListNode.createListNodeFromArray([1,2,3,3,4,4,5])
      const expected = ListNode.createListNodeFromArray([1,2,5])
      expect(removeDuplicatesRecursion(head)).toEqual(expected);
    });

    it('should be [2,3]', function () {
      const head = ListNode.createListNodeFromArray([1,1,1,2,3])
      const expected = ListNode.createListNodeFromArray([2,3])
      expect(removeDuplicatesRecursion(head)).toEqual(expected);
    });
  });
});
