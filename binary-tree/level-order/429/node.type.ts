export class Node {
  val: number;
  children: Node[]

  constructor(val?: number) {
    this.val = val === undefined ? 0 : val
    this.children = []
  }

  static create(list: Array<number | null>) {
    const queue: Node[] = []
    const root = new Node(list[0])
    let curr: Node 

    queue.push(root)

    for(let i = 1 ; i < list.length ; i++) {
      if(list[i]) {
        let node = new Node(list[i])
        queue.push(node)
        curr.children.push(node)
      } else {
        curr = queue.shift()
      }
    }
    return root
  }
}

