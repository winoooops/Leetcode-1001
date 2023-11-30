import {ListNodeRandom, ListNodeRandomLike} from "./ListNodeRandom";


export function copyRandomListHashMap(head: ListNodeRandomLike) {
  if(!head) return null;

  let curr: ListNodeRandomLike = head;
  const nodeMap: Map<ListNodeRandomLike, ListNodeRandomLike> = new Map();
  while(curr) {
    nodeMap.set(curr, new ListNodeRandom(curr.val));
    curr = curr.next;
  }
  curr = head;
  while(curr) {
    let copy = nodeMap.get(curr);
    if(copy) {
      copy.next = nodeMap.get(curr.next) || null;
      copy.random = nodeMap.get(curr.random) || null;
    }

    curr = curr.next;
  }

  return nodeMap.get(head);
}


export function copyRandomListIteration(head: ListNodeRandomLike) {
  if(!head) return null;

  let curr: ListNodeRandomLike = head;
  while(curr) {
    // create A' for A, B' for B
    let newNode:ListNodeRandomLike = new ListNodeRandom(curr.val, curr.next);
    curr.next = newNode;
    curr = newNode.next;
  }

  curr = head;
  while(curr) {
    // set the copied node's random to the original random node's next node
    let newNode = curr.next;
    if(newNode) {
      newNode.random = curr.random ? curr.random.next : null;
    }
    curr = curr.next?.next;
  }

  // go through the interwoven list one last time
  let result = head.next;
  curr = head;
  while(curr) {
    let next: ListNodeRandomLike = curr.next?.next;
    let copy = curr?.next;
    curr.next = next;
    if(copy) {
      copy.next = next ? next.next : null;
    }
    curr = next;
  }

  return result;
}
