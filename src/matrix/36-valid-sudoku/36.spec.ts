import {isValidSudokuOptimal, isValidSudokuSimulation} from "./36";

describe('36. Valid Sudoku', () => {
  it("should be true", () => {
    const board = [
      ["5","3",".",".","7",".",".",".","."]
      ,["6",".",".","1","9","5",".",".","."]
      ,[".","9","8",".",".",".",".","6","."]
      ,["8",".",".",".","6",".",".",".","3"]
      ,["4",".",".","8",".","3",".",".","1"]
      ,["7",".",".",".","2",".",".",".","6"]
      ,[".","6",".",".",".",".","2","8","."]
      ,[".",".",".","4","1","9",".",".","5"]
      ,[".",".",".",".","8",".",".","7","9"]];

    expect(isValidSudokuOptimal(board)).toBe(true);
    expect(isValidSudokuSimulation(board)).toBe(true);

  });

  it("should be false", () => {
    const board = [
      ["8","3",".",".","7",".",".",".","."]
      ,["6",".",".","1","9","5",".",".","."]
      ,[".","9","8",".",".",".",".","6","."]
      ,["8",".",".",".","6",".",".",".","3"]
      ,["4",".",".","8",".","3",".",".","1"]
      ,["7",".",".",".","2",".",".",".","6"]
      ,[".","6",".",".",".",".","2","8","."]
      ,[".",".",".","4","1","9",".",".","5"]
      ,[".",".",".",".","8",".",".","7","9"]];

    expect(isValidSudokuOptimal(board)).toBe(false);
    expect(isValidSudokuSimulation(board)).toBe(false);
  });
})