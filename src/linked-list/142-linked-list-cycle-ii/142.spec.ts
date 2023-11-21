import {ListNode} from "../ListNode";
import {detectCycleFloyed, detectCycleSet} from "./142";

describe('142. Linked List Cycle II', () => {
  describe("Solution: HashMap", () => {
    it('should return 1', function () {
      const head = ListNode.createLoopFromArray([3, 2, 0, -4], 1);
      expect(detectCycleSet(head)).toEqual(head?.getAtIndex(1));
    });

    it('should return 0', function () {
      const head = ListNode.createLoopFromArray([1, 2], 0);
      expect(detectCycleSet(head)).toEqual(head?.getAtIndex(0));
    });

    it("should return null", function () {
      const head = ListNode.createListNodeFromArray([1]);
      expect(detectCycleSet(head)).toBeNull();
    });
  });

  describe('Solution: Two Pointers', () => {
    it('should return 1', function () {
      const head = ListNode.createLoopFromArray([3, 2, 0, -4], 1);
      expect(detectCycleFloyed(head)).toEqual(head?.getAtIndex(1));
    });

    it('should return 0', function () {
      const head = ListNode.createLoopFromArray([1, 2], 0);
      expect(detectCycleFloyed(head)).toEqual(head?.getAtIndex(0));
    });

    it("should return null", function () {
      const head = ListNode.createListNodeFromArray([1]);
      expect(detectCycleFloyed(head)).toBeNull();
    });
  })
});
