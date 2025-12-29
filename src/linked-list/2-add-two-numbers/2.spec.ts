import {ListNode} from "../ListNode";
import {addTwoNums} from "./2";

describe('2. Add Two Numbers', () => {
  it('should be [7, 0, 8]', () => {
    const l1 = ListNode.createListNodeFromArray([2,4,3]);
    const l2 = ListNode.createListNodeFromArray([5,6,4]);

    const result = addTwoNums(l1, l2);
    expect(result?.val).toBe(7);
    expect(result?.next?.val).toBe(0);
    expect(result?.next?.next?.val).toBe(8);
  });
})
