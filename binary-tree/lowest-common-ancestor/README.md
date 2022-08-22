# 236. **¿¿¿¿¿¿¿¿¿¿**

¿¿¿¿¿¿¿, ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿

## **¿¿**

> The lowest common ancestor is the lowest node in the tree that has both n1 and n2 as descendants, where n1 and n2 are the nodes for which we wish to find the LCA. Hence, the LCA of a binary tree with nodes n1 and n2 is the shared ancestor of n1 and n2 that is located farthest from the root.
> 

![lca1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5c55350a-c6e9-49f8-9385-b68d2c630d2d/lca1.png)

```
¿¿¿root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
¿¿¿3
¿¿¿¿¿ 5 ¿¿¿ 1 ¿¿¿¿¿¿¿¿¿¿ 3 ¿

```

```
¿¿¿root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
¿¿¿5
¿¿¿¿¿ 5 ¿¿¿ 4 ¿¿¿¿¿¿¿¿¿¿ 5 ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿

```

## **¿¿**

### **¿¿¿¿¿**

1. ¿¿¿¿¿¿¿¿
    - ¿¿ ¿¿¿¿ `n1` ¿¿ `n2` ¿¿¿¿, ¿¿¿¿¿¿¿¿(LCA¿¿¿¿¿¿¿)
    - ¿¿¿¿¿¿¿ `n1` ¿¿ `n2` ¿¿, ¿¿¿¿¿¿¿¿¿¿¿
2. ¿¿¿¿1), ¿¿¿¿ ¿¿¿¿¿¿ `n1` ¿¿ `n2`, ¿¿¿¿¿¿
3. ¿¿¿¿¿¿¿¿¿¿¿¿¿: ¿¿¿¿¿ `n1`, ¿¿¿¿¿ `n2`

```
Root is pointing to the node with value 1, as its value doesn¿t match with { 5, 6 }. We look for the key in left subtree and right subtree.

* Left Subtree :
  * New Root = { 2 } ¿ 5 or 6, hence we will continue our recursion
  * New Root = { 4 } , it¿s left and right subtree is null, we will return NULL for this call
  * New Root = { 5 } , value matches with 5 so will return the node with value 5
  /* The function call for root with value 2 will return a value of 5 */

* Right Subtree :
  * Root = { 3 } ¿ 5 or 6 hence we continue our recursion
  * Root = { 6 } = 5 or 6 , we will return the this node with value 6
  * Root = { 7 } ¿ 5 or 6, we will return NULL

  /*
  *  So the function call for root with value 3 will return node with value 6
  *  As both the left subtree and right subtree of the node with value 1 is not NULL,
  *  so 1 is the LCA
  */

```

### **¿¿(¿¿¿¿)**

> ***¿¿¿¿¿¿¿¿¿¿¿¿¿¿. ¿¿¿¿¿¿¿¿¿¿¿¿¿¿, ¿¿¿¿¿¿¿¿¿¿¿¿¿.***
> 

### **¿¿**

1. ¿¿¿¿¿¿¿:`node: TreeNode | null`, `p: number`, `q: number`, ¿¿¿¿¿¿¿¿¿¿¿¿, ¿¿¿¿¿¿¿: `TreeNode`
2. ¿¿¿¿¿¿¿:
    - `if(!node) return null`
    - `if(node.val === q || node.val === q) return node`
    - ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿, ¿¿¿¿¿¿
    - ¿¿¿¿¿¿¿¿¿, ¿¿¿¿¿¿¿¿¿
3. ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿

```tsx
export functionfindLCA(node: TreeNode | null, p: number, q: number):TreeNode |null {
  if(!node)return null
  if(node.val === p || node.val === q)return node
  
  let left = findLCA(node.left, p, q)
  let right = findLCA(node.right, p, q)
  
  if(left && right)return node
  if(left)return left
  if(right)return right
}
```

# 235. ¿¿¿¿¿¿¿¿¿¿¿¿ 

¿¿¿¿¿¿¿¿¿, ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿


## ¿¿
¿¿¿¿¿¿¿¿¿¿¿¿:  root = [6,2,8,0,4,7,9,null,null,3,5]
![lca-bst](../../static/img/binary-tree/lca-bst.png)

```
¿¿: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
¿¿: 6
¿¿: ¿¿ 2 ¿¿¿ 8 ¿¿¿¿¿¿¿¿ 6¿
```

```
¿¿: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
¿¿: 2
¿¿: ¿¿ 2 ¿¿¿ 4 ¿¿¿¿¿¿¿¿ 2, ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿
```

## ¿¿ 

¿¿¿¿¿¿¿¿¿¿¿¿¿, ¿¿¿¿¿¿¿¿¿¿¿(¿¿)¿¿. ¿¿¿¿¿¿¿¿¿, ¿¿¿¿¿¿¿¿¿¿¿, ¿¿¿¿¿¿¿¿¿`(p, q)`¿¿¿¿¿. 

* ¿¿¿¿¿¿¿
* ¿¿¿¿¿¿¿¿¿p,q¿¿¿¿¿¿¿¿¿¿¿¿¿, ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿
* ¿¿¿¿¿¿¿¿¿, ¿¿¿¿¿¿

1. ¿¿¿¿¿: `node, p, q`
2. ¿¿¿¿¿¿¿: `if(!node) return null`
3. ¿¿¿¿¿¿¿¿¿
  ```typescript
  export function findBSTLCA(node: TreeNode | null, p: number, q: number): TreeNode | null {
    if(!node) return null 

    // ¿¿p,q¿¿¿
    let left: number; 
    let right: number; 

    if(p > q) {
      left = q
      right = p 
    } else {
      left = p
      right = q
    }
    // ¿¿p,q¿¿,¿¿¿¿
    if(node.val >= left && node.val <= right) return node

    // ¿¿¿¿¿¿¿¿¿¿¿¿
    if(node.val < left) return findBSTLCA(node.right, p, q)

    if(node.val > right) return findBSTLCA(node.left, p, q)
  }
  ```


