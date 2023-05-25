import { sortSquares } from './index'

describe("Test Squares of sorted array", () => {
  it('should return array of the same size', () => {
    const array = [-4, -1, 0, 3, 10];
    const result = sortSquares(array);
    expect(result).toHaveLength(5); 
    expect(result).toEqual([0, 1, 9, 16, 100]);
  })
})
