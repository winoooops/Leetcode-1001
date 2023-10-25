import {setZerosOne, setZerosTwo} from "./73";

describe('73. Set Matrix Zero', () => {
  describe("use 2 arrays", () => {
    it('should be [[1,0,1],[0,0,0],[1,0,1]]', function () {
      const matrix = [[1,1,1],[1,0,1],[1,1,1]];
      const outcome = [[1,0,1],[0,0,0],[1,0,1]]
      setZerosOne(matrix)
      expect(matrix).toEqual(expect.arrayContaining(outcome));
    });

    it('should be [[1,0,1],[0,0,0],[1,0,1]]', function () {
      const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
      const outcome = [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
      setZerosOne(matrix)
      expect(matrix).toEqual(expect.arrayContaining(outcome));
    });
  })

  describe("use 2 flag", () => {
    it('should be [[1,0,1],[0,0,0],[1,0,1]]', function () {
      const matrix = [[1,1,1],[1,0,1],[1,1,1]];
      const outcome = [[1,0,1],[0,0,0],[1,0,1]]
      setZerosTwo(matrix)
      expect(matrix).toEqual(expect.arrayContaining(outcome));
    });

    it('should be [[1,0,1],[0,0,0],[1,0,1]]', function () {
      const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
      const outcome = [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
      setZerosTwo(matrix)
      expect(matrix).toEqual(expect.arrayContaining(outcome));
    });
  });


})
