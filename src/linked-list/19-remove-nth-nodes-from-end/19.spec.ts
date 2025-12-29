import {ListNode} from "../ListNode";
import {
  removeNthFromEndHashMap,
  removeNthFromEndIteration,
  removeNthNodeFromEndStack,
  removeNthNodeFromEndTwoPointers
} from "./19";

describe('19.Remove Nth Node from End of List', () => {
  describe("Solution: HashMap", () => {
    it('should be [1,2,3,5]', function () {
      const head = ListNode.createListNodeFromArray([1, 2, 3, 4, 5]);
      const expected = ListNode.createListNodeFromArray([1, 2, 3, 5]);
      const result = removeNthFromEndHashMap(head, 2);

      expect(result).toEqual(expected);
    });

    it('should be []', function () {
      const head = ListNode.createListNodeFromArray([1]);
      const expected = ListNode.createListNodeFromArray([]);
      const result = removeNthFromEndHashMap(head, 1);

      expect(result).toEqual(expected);
    });

    it('should be [1]', function () {
      const head = ListNode.createListNodeFromArray([1,2]);
      const expected = ListNode.createListNodeFromArray([1]);
      const result = removeNthFromEndHashMap(head, 1);

      expect(result).toEqual(expected);
    });

    it('should be [2]', function () {
      const head = ListNode.createListNodeFromArray([1,2]);
      const expected = ListNode.createListNodeFromArray([2]);
      const result = removeNthFromEndHashMap(head, 2);

      expect(result).toEqual(expected);
    });
  })

  describe("Solution: Iteration", () => {
    it('should be [1,2,3,5]', function () {
      const head = ListNode.createListNodeFromArray([1, 2, 3, 4, 5]);
      const expected = ListNode.createListNodeFromArray([1, 2, 3, 5]);
      const result = removeNthFromEndIteration(head, 2);

      expect(result).toEqual(expected);
    });

    it('should be []', function () {
      const head = ListNode.createListNodeFromArray([1]);
      const expected = ListNode.createListNodeFromArray([]);
      const result = removeNthFromEndIteration(head, 1);

      expect(result).toEqual(expected);
    });

    it('should be [1]', function () {
      const head = ListNode.createListNodeFromArray([1,2]);
      const expected = ListNode.createListNodeFromArray([1]);
      const result = removeNthFromEndIteration(head, 1);

      expect(result).toEqual(expected);
    });

    it('should be [2]', function () {
      const head = ListNode.createListNodeFromArray([1,2]);
      const expected = ListNode.createListNodeFromArray([2]);
      const result = removeNthFromEndIteration(head, 2);

      expect(result).toEqual(expected);
    });
  })

  describe('Solution: Stack', () => {
    it('should be [1,2,3,5]', function () {
      const head = ListNode.createListNodeFromArray([1, 2, 3, 4, 5]);
      const expected = ListNode.createListNodeFromArray([1, 2, 3, 5]);
      const result = removeNthNodeFromEndStack(head, 2);

      expect(result).toEqual(expected);
    });

    it('should be []', function () {
      const head = ListNode.createListNodeFromArray([1]);
      const expected = ListNode.createListNodeFromArray([]);
      const result = removeNthNodeFromEndStack(head, 1);

      expect(result).toEqual(expected);
    });

    it('should be [1]', function () {
      const head = ListNode.createListNodeFromArray([1,2]);
      const expected = ListNode.createListNodeFromArray([1]);
      const result = removeNthNodeFromEndStack(head, 1);

      expect(result).toEqual(expected);
    });

    it('should be [2]', function () {
      const head = ListNode.createListNodeFromArray([1,2]);
      const expected = ListNode.createListNodeFromArray([2]);
      const result = removeNthNodeFromEndStack(head, 2);

      expect(result).toEqual(expected);
    });
  })

  describe('Solution: Two Pointers', () => {
    it('should be [1,2,3,5]', function () {
      const head = ListNode.createListNodeFromArray([1, 2, 3, 4, 5]);
      const expected = ListNode.createListNodeFromArray([1, 2, 3, 5]);
      const result = removeNthNodeFromEndTwoPointers(head, 2);

      expect(result).toEqual(expected);
    });

    it('should be []', function () {
      const head = ListNode.createListNodeFromArray([1]);
      const expected = ListNode.createListNodeFromArray([]);
      const result = removeNthNodeFromEndTwoPointers(head, 1);

      expect(result).toEqual(expected);
    });

    it('should be [1]', function () {
      const head = ListNode.createListNodeFromArray([1,2]);
      const expected = ListNode.createListNodeFromArray([1]);
      const result = removeNthNodeFromEndTwoPointers(head, 1);

      expect(result).toEqual(expected);
    });

    it('should be [2]', function () {
      const head = ListNode.createListNodeFromArray([1,2]);
      const expected = ListNode.createListNodeFromArray([2]);
      const result = removeNthNodeFromEndTwoPointers(head, 2);

      expect(result).toEqual(expected);
    });
  })
})
