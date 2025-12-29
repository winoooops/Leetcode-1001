import {BSTIterator} from "./173";
import {TreeNode} from "../../binary-tree/TreeNode";

describe("173. BST Iterator", () => {
  describe("Preorder with stack", () => {
    it("should implement the features accordingly", () => {
      const root = TreeNode.createTree([7, 3, 15, null, null, 9, 20]);
      const bst = new BSTIterator(root as TreeNode);
      expect(bst.next()).toBe(3);
      expect(bst.next()).toBe(7);
      expect(bst.hasNext()).toBe(true);
      expect(bst.next()).toBe(9);
      expect(bst.hasNext()).toBe(true);
      expect(bst.next()).toBe(15);
      expect(bst.hasNext()).toBe(true);
      expect(bst.next()).toBe(20);
      expect(bst.hasNext()).toBe(false);
    });

    it("should implement well with ", () => {
      const root = TreeNode.createTree([12, 6, 15, 5, 9]);
      const bst = new BSTIterator(root as TreeNode);
      expect(bst.next()).toBe(5);
      expect(bst.next()).toBe(6);
      expect(bst.hasNext()).toBe(true);
      expect(bst.next()).toBe(9);
      expect(bst.hasNext()).toBe(true);
      expect(bst.next()).toBe(12);
      expect(bst.hasNext()).toBe(true);
      expect(bst.next()).toBe(15);
    });
  });
});
