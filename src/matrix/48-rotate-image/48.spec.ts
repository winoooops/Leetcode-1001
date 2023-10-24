import {rotate} from "./48";

describe('48. Rotate Image', () => {
  it('should be [[7,4,1],[8,5,2],[9,6,3]]', function () {
    const matrix= [[1,2,3],[4,5,6],[7,8,9]];
    rotate(matrix);
    expect(matrix).toEqual(expect.arrayContaining([[7,4,1],[8,5,2],[9,6,3]]))
  });
})
