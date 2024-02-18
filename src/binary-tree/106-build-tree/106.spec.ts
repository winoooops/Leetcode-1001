import {TreeNode} from "../TreeNode";
import {buildTreeRecursive} from "../106-build-tree/106";

describe("106. Construct Binary Tree from inorder and postorder Traversal", () => {
  describe("Recursive", () => {
    it("should be [3,9,20,null,null,15,7]", () => {
      const inorder = [9,3,15,20,7];
      const postorder = [9,15,7,20,3]

      const expected = TreeNode.createTree([3,9,20,null,null,15,7]);
      expect(buildTreeRecursive(inorder, postorder)).toEqual(expected);
    });

    it("should be [-1]", () => {
      const inorder = [-1];
      const postorder = [-1];
      expect(buildTreeRecursive(inorder, postorder)).toEqual(TreeNode.createTree([-1]));
    });

    it("should be [2,1]", () => {
      const inorder = [2,1];
      const postorder = [2,1];
      expect(buildTreeRecursive(inorder, postorder)).toEqual(TreeNode.createTree([1,2]));
    });

    it("should be [1,2,3,4,5,6,7]", () => {
      const inorder = [4,2,5,1,6,3,7];
      const postorder = [4,5,2,6,7,3,1];
      expect(buildTreeRecursive(inorder, postorder)).toEqual(TreeNode.createTree([1,2,3,4,5,6,7]));
    });
  });

  describe("Iterative", () => {

  });
});
