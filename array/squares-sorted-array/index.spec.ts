import { sortSquares } from './index'

describe("Test Squares of sorted array", () => {
  it('should return array of the same size', () => {
    const array = [-4, -1, 0, 3, 10]
    expect(sortSquares(array)).toHaveLength(5) 
  })
})
