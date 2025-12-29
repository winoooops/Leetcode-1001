import {ListNode} from "./ListNode";

describe('Test ListNode', () => {
  describe("test createListNodeFromArray static function", () => {
    it('test create based on [2,4,3]', () => {
      const list = [2,4,3];
      const result = ListNode.createListNodeFromArray(list);

      expect(result?.val).toBe(2);
      expect(result?.next?.val).toEqual(4);
      expect(result?.next?.next?.val).toEqual(3);
    });

    it('test create based on [5,6,4]', () => {
      const list = [5,6,4];
      const result = ListNode.createListNodeFromArray(list);

      expect(result?.val).toBe(5);
      expect(result?.next?.val).toEqual(6);
      expect(result?.next?.next?.val).toEqual(4);
    });
  })
})

