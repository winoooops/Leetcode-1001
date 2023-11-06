import {findMinArrowShots, findMinArrowShotsTwo} from "./452";

describe('452. Minimum Number of Arrows to Burst Balloons ', () => {
  it('should be 2', function () {
    const points = [[10,16],[2,8],[1,6],[7,12]];
    expect(findMinArrowShots(points)).toBe(2);
    expect(findMinArrowShotsTwo(points)).toBe(2);
  });

  it('should be 4', function () {
    const points = [[1,2],[3,4],[5,6],[7,8]];
    expect(findMinArrowShots(points)).toBe(4);
    expect(findMinArrowShotsTwo(points)).toBe(4);
  });

  it('should be 2', function () {
    const points = [[1,2],[2,3],[3,4],[4,5]];
    expect(findMinArrowShots(points)).toBe(2);
    expect(findMinArrowShotsTwo(points)).toBe(2);
  });

  it('should be 2', function () {
    const points = [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]];
    expect(findMinArrowShots(points)).toBe(2);
    expect(findMinArrowShotsTwo(points)).toBe(2);
  });
})
