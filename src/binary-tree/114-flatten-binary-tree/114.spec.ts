import {TreeNode} from "../TreeNode";
import {flattenIteration, flattenRecursion} from "./114";

describe("114. Flatten Binary Tree to LinkedList", () => {
  describe("Solution Recursion", () => {
    it("should be [1,null,2,null,3,null,4,null,5,null,6]", () => {
      const root = TreeNode.createTree([1, 2, 5, 3, 4, null, 6]);
      flattenRecursion(root);
      const expected = TreeNode.createTree([1, null, 2, null, 3, null, 4, null, 5, null, 6]);
      expect(root).toEqual(expected);
    });
  });

  describe("Solution Iteration", () => {
    it("should be [1,null,2,null,3,null,4,null,5,null,6]", () => {
      const root = TreeNode.createTree([1, 2, 5, 3, 4, null, 6]);
      flattenIteration(root);
      const expected = TreeNode.createTree([1, null, 2, null, 3, null, 4, null, 5, null, 6]);
      expect(root).toEqual(expected);
    });
  });
})
