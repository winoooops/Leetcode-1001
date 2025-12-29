import {summaryRanges} from "./228";

describe('228. Summary Ranges', () => {
  it('should be ["0->2", "4->5", "7"]', () => {
    const nums = [0,1,2,4,5,7];
    expect(summaryRanges(nums)).toEqual(expect.arrayContaining(["0->2", "4->5", "7"]));
  });

  it('should be ["0", "2->4", "6", "8->9"]', () => {
    const nums = [0,2,3,4,6,8,9];
    expect(summaryRanges(nums)).toEqual(expect.arrayContaining(["0", "2->4", "6", "8->9"]));
  });
})
