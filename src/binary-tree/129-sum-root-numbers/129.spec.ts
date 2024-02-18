import {TreeNode} from "../TreeNode";
import {sumNumbersDFS, sumNumbersRecursion} from "./129";

describe("129. Sum Root to Leaf Numbers", () => {
  describe("DFS", () => {
    it("should be 25", () => {
      const root = TreeNode.createTree([1,2,3]);
      expect(sumNumbersDFS(root)).toBe(25)
    });

    it("should be 1026", () => {
      const root = TreeNode.createTree([4,9,0,5,1]);
      expect(sumNumbersDFS(root)).toBe(1026)
    })

    it("should be 10", () => {
      const root = TreeNode.createTree([1,0]);
      expect(sumNumbersDFS(root)).toBe(10);
    })
  });

  describe("Recursion", () => {
    it("should be 25", () => {
      const root = TreeNode.createTree([1,2,3]);
      expect(sumNumbersRecursion(root)).toBe(25)
    });

    it("should be 1026", () => {
      const root = TreeNode.createTree([4,9,0,5,1]);
      expect(sumNumbersRecursion(root)).toBe(1026)
    })

    it("should be 10", () => {
      const root = TreeNode.createTree([1,0]);
      expect(sumNumbersRecursion(root)).toBe(10);
    })
  });
});
