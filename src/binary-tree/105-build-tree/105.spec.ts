import {TreeNode} from "../TreeNode";
import {buildTree, buildTreeIterative} from "./105";

describe('105. Construct Binary Tree from Preorder and Inorder Traversal', () => {
  describe('Recursive Approach', () => {
    it("should be [3,9,20,null,null,15,7]", () => {
      const preorder = [3,9,20,15,7];
      const inorder = [9,3,15,20,7];

      const expected = TreeNode.createTree([3,9,20,null,null,15,7]);
      expect(buildTree(preorder, inorder)).toEqual(expected);
    });

    it("should be [1,2,3,4,5,6,7]", () => {
      const preorder = [1,2,4,5,3,6,7];
      const inorder = [4,2,5,1,6,3,7];

      const expected = TreeNode.createTree([1,2,3,4,5,6,7]);
      expect(buildTree(preorder, inorder)).toEqual(expected);
    })

    it("should be [1,2]", () => {
      const preorder = [1,2];
      const inorder = [2,1];
      const expected = TreeNode.createTree([1,2]);
      expect(buildTree(preorder, inorder)).toEqual(expected);
    });
  });

  describe('Iterative Approach', () => {
    it("should be [3,9,20,null,null,15,7]", () => {
      const preorder = [3,9,20,15,7];
      const inorder = [9,3,15,20,7];

      const expected = TreeNode.createTree([3,9,20,null,null,15,7]);
      expect(buildTreeIterative(preorder, inorder)).toEqual(expected);
    });

    it("should be [1,2,3,4,5,6,7]", () => {
      const preorder = [1,2,4,5,3,6,7];
      const inorder = [4,2,5,1,6,3,7];

      const expected = TreeNode.createTree([1,2,3,4,5,6,7]);
      expect(buildTreeIterative(preorder, inorder)).toEqual(expected);
    })

    it("should be [1,2]", () => {
      const preorder = [1,2];
      const inorder = [2,1];
      const expected = TreeNode.createTree([1,2]);
      expect(buildTreeIterative(preorder, inorder)).toEqual(expected);
    });
  })


});
