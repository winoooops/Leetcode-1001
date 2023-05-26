import { sortSquares } from './index'

describe("Test Squares of sorted array", () => {
  it('should return array of the same size', () => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const array = [-4, -1, 0, 3, 10]
    expect(sortSquares(array)).toHaveLength(5) 
=======
=======
>>>>>>> parent of ab51a25 (refactor structure of java project and add java solution in array)
    const array = [-4, -1, 0, 3, 10];
    const result = sortSquares(array);
    expect(result).toHaveLength(5); 
    expect(result).toEqual([0, 1, 9, 16, 100]);
<<<<<<< HEAD
>>>>>>> parent of ab51a25 (refactor structure of java project and add java solution in array)
=======
>>>>>>> parent of ab51a25 (refactor structure of java project and add java solution in array)
=======
    const array = [-4, -1, 0, 3, 10]
    expect(sortSquares(array)).toHaveLength(5) 
>>>>>>> parent of 1256a90 (some changes but mostly reviewing)
  })
})
