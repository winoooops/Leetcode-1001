import {Node} from "../Node";
import {connectBFS, connectBFS2} from "./117";

describe("117. Populating Next Right Pointers in Each Node II", () => {
  describe("BFS with queue", () => {
    it("should be [1,#,2,3,#,4,5,7,#]", () => {
      const root = Node.createTree([1, 2, 3, 4, 5, null, 7]);
      const result = connectBFS(root) as Node;
      // 1 => null
      result.next = null;
      // 2 => 3
      result.left!.next = result.right;
      // 3 => null
      result.right!.next = null;

      // 4 => 5 => 7 => null
      result.left!.left!.next = result.left!.right;
      result.left!.right!.next = result.right!.right;
      result.right!.right!.next = null;
    });

    it("should be []", () => {
      const root = Node.createTree([]);
      const result = connectBFS(root);
      expect(result).toBeNull();
    });
  });

  describe("BFS without queue", () => {
    it("should be [1,#,2,3,#,4,5,7,#]", () => {
      const root = Node.createTree([1, 2, 3, 4, 5, null, 7]);
      const result = connectBFS2(root) as Node;

      // 1 => null
      result.next = null;
      // 2 => 3
      result.left!.next = result.right;
      // 3 => null
      result.right!.next = null;

      // 4 => 5 => 7 => null
      result.left!.left!.next = result.left!.right;
      result.left!.right!.next = result.right!.right;
      result.right!.right!.next = null;
    });

    it("should be []", () => {
      const root = Node.createTree([]);
      const result = connectBFS(root);
      expect(result).toBeNull();
    });
  });

});
