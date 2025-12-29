import {ListNode} from "../ListNode";
import {mergeTwoListsIteration, mergeTwoListsRecursion} from "./21";

describe('21. Merge Two Sorted Lists', () => {
  describe('Solution: Iteration', () => {
    it('should be [1,1,2,3,4,4]', () => {
      const l1 = ListNode.createListNodeFromArray([1,2,4]);
      const l2 = ListNode.createListNodeFromArray([1,3,4]);
      const output = mergeTwoListsIteration(l1, l2);

      const expected = ListNode.createListNodeFromArray([1,1,2,3,4,4])
      expect(output).toEqual(expected);
    });

    it('should be []', () => {
      const l1 = ListNode.createListNodeFromArray([]);
      const l2 = ListNode.createListNodeFromArray([]);
      const output = mergeTwoListsIteration(l1, l2);

      const expected = ListNode.createListNodeFromArray([])
      expect(output).toEqual(expected);
    });

    it('should be [0]', () => {
      const l1 = ListNode.createListNodeFromArray([]);
      const l2 = ListNode.createListNodeFromArray([0]);
      const output = mergeTwoListsIteration(l1, l2);

      const expected = ListNode.createListNodeFromArray([0])
      expect(output).toEqual(expected);
    });
  })

  describe('Solution: Recursion', () => {
    it('should be [1,1,2,3,4,4]', () => {
      const l1 = ListNode.createListNodeFromArray([1,2,4]);
      const l2 = ListNode.createListNodeFromArray([1,3,4]);
      const output = mergeTwoListsRecursion(l1, l2);

      const expected = ListNode.createListNodeFromArray([1,1,2,3,4,4])
      expect(output).toEqual(expected);
    });

    it('should be []', () => {
      const l1 = ListNode.createListNodeFromArray([]);
      const l2 = ListNode.createListNodeFromArray([]);
      const output = mergeTwoListsRecursion(l1, l2);

      const expected = ListNode.createListNodeFromArray([])
      expect(output).toEqual(expected);
    });

    it('should be [0]', () => {
      const l1 = ListNode.createListNodeFromArray([]);
      const l2 = ListNode.createListNodeFromArray([0]);
      const output = mergeTwoListsRecursion(l1, l2);

      const expected = ListNode.createListNodeFromArray([0])
      expect(output).toEqual(expected);
    });
  })
})
