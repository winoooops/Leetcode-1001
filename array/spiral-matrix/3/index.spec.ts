import { spiralMatrixThree } from './index'

describe('Test Spiram Matrix Three', () => {
  it('should return [[0,0],[0,1],[0,2],[0,3]]', ()=> {
    expect(spiralMatrixThree(1,4,0,0)).toStrictEqual([[0,0],[0,1],[0,2],[0,3]])
  })
})

