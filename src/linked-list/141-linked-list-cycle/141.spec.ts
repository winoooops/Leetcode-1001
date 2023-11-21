import {hasCycleFloyedTwo} from "./141";
import {ListNode} from "../ListNode";

describe("Check loop function", () => {
  it("should find a loop in pos 1", () => {
    const head = ListNode.createLoopFromArray([3, 2, 0, -4], 1);
    const start = head?.getAtIndex(1);
    const end = head?.getAtIndex(3)
    expect(end?.next).toEqual(start);
  })
});

describe('141. Linked List Cycle', () => {
  describe("Solution: Floyd's Tortoise and Hare", () => {
    it("should return true if there is a cycle in the linked list", () => {
      const head = ListNode.createLoopFromArray([3, 2, 0, -4], 1);
      expect(hasCycleFloyedTwo(head)).toBe(true);
    });

    it("should return true if there is a cycle in the linked list", () => {
      const head = ListNode.createLoopFromArray([1, 2], 0);
      expect(hasCycleFloyedTwo(head)).toBe(true);
    });

    it("should return false if there is no cycle in the linked list", () => {
      const head = ListNode.createLoopFromArray([1], -1);
      expect(hasCycleFloyedTwo(head)).toBe(false);
    });

    it("should return false if the linked list is empty", () => {
      const head = ListNode.createLoopFromArray([], -1);
      expect(hasCycleFloyedTwo(head)).toBe(false);
    });
  });
});
