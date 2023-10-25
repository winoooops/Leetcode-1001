import {gameOfLife} from "./289";

describe('289. Game of Life', () => {
  it('should be [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]', function () {
    const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
    const outcome = [[0,0,0],[1,0,1],[0,1,1],[0,1,0]];
    gameOfLife(board);
    expect(board).toEqual(expect.arrayContaining(outcome));
  });

  it('should be [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]', function () {
    const board =[[1,1],[1,0]];
    const outcome = [[1,1],[1,1]];
    gameOfLife(board);
    expect(board).toEqual(expect.arrayContaining(outcome));
  });
})
