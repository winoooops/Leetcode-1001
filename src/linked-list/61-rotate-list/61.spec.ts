import {ListNode} from "../ListNode";
import {rotateRight} from "./61";

describe('61. Rotate List', () => {
  it('should be [4,5,1,2,3]', function () {
    const head = ListNode.createListNodeFromArray([1,2,3,4,5]);
    const expected = ListNode.createListNodeFromArray([4,5,1,2,3]);

    expect(rotateRight(head, 2)).toEqual(expected);
  });

  it('should be [2,0,1]', function () {
    const head = ListNode.createListNodeFromArray([0,1,2]);
    const expected = ListNode.createListNodeFromArray([2,0,1]);

    expect(rotateRight(head, 4)).toEqual(expected);
  });

  it("should be [1,2]", function () {
    const head = ListNode.createListNodeFromArray([1,2]);
    const expected = ListNode.createListNodeFromArray([1,2]);

    expect(rotateRight(head, 2)).toEqual(expected);
  })
})
