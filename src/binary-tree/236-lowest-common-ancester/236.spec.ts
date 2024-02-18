import {TreeNode} from "../TreeNode";
import {LCADFS, LCARecursion} from "./236";

describe('236. LCA', () => {
  describe("Recursion", () => {
    it("should be 3", () => {
      const root = TreeNode.createTree([3,5,1,6,2,0,8,null,null,7,4])
      const p = TreeNode.createTree([5, 6, 2, null, null, 7, 4])
      const q = TreeNode.createTree([1, 0, 8]);
      const result = LCARecursion(root, p, q);
      expect(result).toEqual(root);
    });

    it("should be 5", () => {
      const root = TreeNode.createTree([3,5,1,6,2,0,8,null,null,7,4])
      const p = TreeNode.createTree([5, 6, 2, null, null, 7, 4])
      const q = TreeNode.createTree([4]);
      const result = LCARecursion(root, p, q);
      expect(result).toEqual(root?.left);
    });

    it("should be 1", () => {
      const root = TreeNode.createTree([1, 2]);
      const result = LCARecursion(root, root, root!.left);
      expect(result).toEqual(root);
    });
  });

  describe("DFS", () => {
    it("should be 3", () => {
      const root = TreeNode.createTree([3,5,1,6,2,0,8,null,null,7,4])
      const result = LCADFS(root, 5, 1);
      expect(result).toEqual(root);
    });

    it("should be 5", () => {
      const root = TreeNode.createTree([3,5,1,6,2,0,8,null,null,7,4])
      const result = LCADFS(root, 5, 4);
      expect(result).toEqual(root?.left);
    });

    it("should be 1", () => {
      const root = TreeNode.createTree([1, 2]);
      const result = LCADFS(root, 1, 2);
      expect(result).toEqual(root);
    });
  })
})
