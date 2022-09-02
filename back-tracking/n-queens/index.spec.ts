import { solveNQueens } from "./index"

describe("Leet 51: Solve N Queens", () => {
  it("should be right", () => {
    expect(solveNQueens(4)).toEqual([[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]])
  })

  it("should be right", () => {
    expect(solveNQueens(3)).toEqual([])
  })
})
