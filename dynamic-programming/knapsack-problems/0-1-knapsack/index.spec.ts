import { knapsack } from "./index";

describe("The 0/1 Kanpsack Problem", () => {
  it("should be 70", () => {
    const weight = [1, 3, 4, 5];
    const value = [15, 20, 30, 55];
    const size = 6;
    expect(knapsack(weight, value, size)).toBe(70);
  })

  it("should be 80", () => {
    const weight = [5, 3, 4, 2];
    const value = [60, 50, 70, 30];
    const size = 5;
    expect(knapsack(weight, value, size)).toBe(80);
  })
})
