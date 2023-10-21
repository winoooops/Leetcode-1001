import {spiralOrder} from "./54";

describe('54. Spiral Matrix One', () => {
  it('should be [1,2,3,6,9,8,7,4,5]', () => {
    const matrix = [[1,2,3], [4,5,6],[7,8,9]];
    const result = spiralOrder(matrix);
    expect(result).toEqual(expect.arrayContaining([1,2,3,6,9,8,7,4,5]));
  })

  it('should be [1,2,3,4,8,12,11,10,9,5,6,7]', () => {
    const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
    const result = spiralOrder(matrix);
    expect(result).toEqual(expect.arrayContaining([1,2,3,4,8,12,11,10,9,5,6,7]));
  })
})
