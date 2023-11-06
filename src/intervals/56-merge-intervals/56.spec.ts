import {merge, mergeTwo} from "./56";

describe('56. Merge Intervals', () => {
  it('should be [[1,6],[8,10],[15,18]]', () => {
    const intervals = [[1,3],[2,6],[8,10],[15,18]]
    const outcome = [[1,6],[8,10],[15,18]]

    expect(merge(intervals)).toEqual(expect.arrayContaining(outcome));
    expect(mergeTwo(intervals)).toEqual(expect.arrayContaining(outcome));
  });

  it('should be [[1,5]]', () => {
    const intervals = [[1,4],[4,5]]
    const outcome = [[1,5]]

    expect(merge(intervals)).toEqual(expect.arrayContaining(outcome));
    expect(mergeTwo(intervals)).toEqual(expect.arrayContaining(outcome));
  });
})
