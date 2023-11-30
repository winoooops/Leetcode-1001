import {ListNode} from "../ListNode";
import {partition} from "./86";

describe('86.Partition List', () => {
  it('should be [1,2,2,4,3,5]', function () {
    const head = ListNode.createListNodeFromArray([1,4,3,2,5,2]);
    const expected = ListNode.createListNodeFromArray([1,2,2,4,3,5])

    expect(partition(head,3)).toEqual(expected);
  });

  it('should be [1,2]', function () {
    const head = ListNode.createListNodeFromArray([1,2]);
    const expected = ListNode.createListNodeFromArray([2,1])

    expect(partition(head,2)).toEqual(expected);
  });
})
