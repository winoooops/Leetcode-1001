import {copyRandomListHashMap, copyRandomListIteration} from "./138";
import {ListNodeRandom} from "./ListNodeRandom";

describe('138. Copy List with Random Pointer', () => {
  describe("Solution: hashMap", () => {
    it('should be [[7,null],[13,0],[11,4],[10,2],[1,0]]', function () {
      const head = ListNodeRandom.createListNodeFromArray([[7,null],[13,0],[11,4],[10,2],[1,0]]);
      expect(copyRandomListHashMap(head)).toEqual(head);
    });

    it('should be [[1,1],[2,1]]', function () {
      const head = ListNodeRandom.createListNodeFromArray([[1,1],[2,1]]);
      expect(copyRandomListHashMap(head)).toEqual(head);
    });

    it('should be [[3,null],[3,0],[3,null]]', function () {
      const head = ListNodeRandom.createListNodeFromArray([[3,null],[3,0],[3,null]]);
      expect(copyRandomListHashMap(head)).toEqual(head);
    });
  });

  describe("Solution: iteration", () => {
    it('should be [[7,null],[13,0],[11,4],[10,2],[1,0]]', function () {
      const head = ListNodeRandom.createListNodeFromArray([[7,null],[13,0],[11,4],[10,2],[1,0]]);
      expect(copyRandomListIteration(head)).toEqual(head);
    });

    it('should be [[1,1],[2,1]]', function () {
      const head = ListNodeRandom.createListNodeFromArray([[1,1],[2,1]]);
      expect(copyRandomListIteration(head)).toEqual(head);
    });

    it('should be [[3,null],[3,0],[3,null]]', function () {
      const head = ListNodeRandom.createListNodeFromArray([[3,null],[3,0],[3,null]]);
      expect(copyRandomListIteration(head)).toEqual(head);
    });
  });

  describe("Test class ListNodeRandom", () => {
    it("should be create properly from [[7,null],[13,0],[11,4],[10,2],[1,0]]", ()=> {
      const list = [[7,null],[13,0],[11,4],[10,2],[1,0]];
      let node = ListNodeRandom.createListNodeFromArray(list);

      const firstNode = node?.getNodeAtIndex(0);
      expect(firstNode?.val).toBe(7);
      expect(firstNode?.random).toBe(null);

      const secondNode = node?.getNodeAtIndex(1);
      expect(secondNode?.val).toBe(13);
      expect(secondNode?.random).toEqual(firstNode);

      const thirdNode = node?.getNodeAtIndex(2);
      expect(thirdNode?.val).toBe(11);
      expect(thirdNode?.random).toEqual(node?.getNodeAtIndex(4));

      const fourth = node?.getNodeAtIndex(3);
      expect(fourth?.val).toBe(10);
      expect(fourth?.random).toEqual(thirdNode);

      const fifth = node?.getNodeAtIndex(4);
      expect(fifth?.val).toBe(1);
      expect(fifth?.random).toEqual(firstNode);
    })
  });
})
