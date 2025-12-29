import {insertInterval} from "./57";

describe('57. Insert Interval', () => {
  it('should be [[1,5],[6,9]]', () => {
    const intervals = [[1,3],[6,9]];
    const newInterval = [2,5];

    expect(insertInterval(intervals, newInterval)).toEqual([[1,5],[6,9]])
  });

  it('should be [[1,5],[6,9]]', () => {
    const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
    const newInterval = [4,8];

    expect(insertInterval(intervals, newInterval)).toEqual([[1,2],[3,10],[12,16]])
  });
})
