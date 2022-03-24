import { spiralMatrixOne } from './index' 


describe('Test Spiral Matrix One', () => {
  it('should return empty array if empty matrix given', () => {
    expect(spiralMatrixOne([])).toStrictEqual([])
  })

  it('Test with [[1,2,3], [4,5,6], [7,8,9]]', () => {
    const matrix = [[1,2,3], [4,5,6], [7,8,9]];
    expect(spiralMatrixOne(matrix)).toStrictEqual([1,2,3,6,9,8,7,4,5])
  })

  it('Test with [[1,2,3,4], [5,6,7,8],[9,10,11,12]]', () => {
    const matrix = [[1,2,3,4], [5,6,7,8],[9,10,11,12]]
    expect(spiralMatrixOne(matrix)).toStrictEqual([1,2,3,4,8,12,11,10,9,5,6,7])
  })

  it("Test with [[1,2,3,4],[5,6,7,8],[9,10,11,12]]", () => {
    const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    expect(spiralMatrixOne(matrix)).toStrictEqual([1,2,3,4,8,12,11,10,9,5,6,7])
  })
})
