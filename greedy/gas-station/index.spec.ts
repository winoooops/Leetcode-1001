import { canCompleteCircuit } from "./index"

describe("Leetcode 134: Gas Station", () => {
  it("it should return 3", () => {
    const gas = [1,2,3,4,5]
    const cost = [3,4,5,1,2]
    expect(canCompleteCircuit(gas, cost)).toBe(3)
  })

  it("should return -1", () => {
    const gas = [2,3,4]
    const cost = [3,4,3]
    expect(canCompleteCircuit(gas, cost)).toBe(-1)
  })
})
