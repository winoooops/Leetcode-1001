import { sprialMatrixTwo } from './index'

describe('Test Sprial Matrix II', () => {
  it('should return [[1]]', () => {
    expect(sprialMatrixTwo(1)).toStrictEqual([[1]])
  })

  it('should return [[1,2,3],[8,9,4],[7,6,5]]', () => {
    expect(sprialMatrixTwo(3)).toStrictEqual([[1,2,3],[8,9,4],[7,6,5]])
  })
})
