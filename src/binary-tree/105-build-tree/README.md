# 105. Construct Binary Tree from Preorder and Inorder Traversal

Given two integer arrays `preorder` and `inorder`, where `preorder` is the preorder traversal of a binary tree 
and `inorder` is the inorder traversal of the same tree, construct and return the binary tree.

Constraints:
* 1 <= preorder.length <= 3000
* inorder.length == preorder.length
* -3000 <= preorder[i], inorder[i] <= 3000
* preorder and inorder consist of unique values.
* Each value of inorder also appears in preorder.
* preorder is guaranteed to be the preorder traversal of the tree.
* inorder is guaranteed to be the inorder traversal of the tree.


## Example

```
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
```

```
Input: preorder = [-1], inorder = [-1]
Output: [-1]
```


## Solution

* the preorder is to put the root node at the first place, and then recursively put the left subtree and right subtree
* the inorder is to recursively put the left subtree at the first place, and then put the root node and finally recursively put the right subtree


### Recursive

1. The first thing we are sure about is that the 1st element in the preorder array represents the root node.
2. Next, we need to locate this root node in the inorder array. 
This allows us to determine the elements on the left side of the root node as the inorder traversal of the left subtree and the elements on the right side of the root node as the inorder traversal of the right subtree.
3. We can divide the preorder array as well. The elements after the root node in the preorder array belong to the preorder traversal of the right subtree, 
while the elements between index 1 and the index of the root node (inclusive) correspond to the preorder traversal of the left subtree.
4. By following a recursive approach, we repeat steps 1 to 3 for the left and right subtrees until there are no more nodes left in the preorder array. This allows us to build the entire binary tree.

> The Time Complexity is O(n^2) because we need to find the root node in the inorder array every time. The Space Complexity is O(n) because we need to store the entire tree.

```ts
export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if(preorder.length === 0) return null;
  const root = new TreeNode(preorder[0]);

  // find the root in the inorder array
  const rootAt = inorder.indexOf(preorder[0]);
  const leftIn = inorder.slice(0, rootAt);
  const rightIn = inorder.slice(rootAt+1);

  // because preorder and inorder are of the same length
  const leftPre = preorder.slice(1, rootAt+1);
  const rightPre = preorder.slice(rootAt+1);


  // recursively build leftSub and rightSub
  root.left = buildTree(leftPre, leftIn);
  root.right = buildTree(rightPre, rightIn);

  return root;
}
```

### Iterative

Before we dive into the solution, let's first understand the idea behind it.
Let's say for any two consecutive nodes `u` & `v` in the preorder array, their relationship to each other is one of the following:
1. `v` is the left child of `u` 
2. `v` is the right child of `u` or is the left child of some node `x` such that `x` is the right child of `u`

To solve this problem iteratively, we can use a stack to keep track of the nodes we have visited so far. The algorithm follows these steps:

* Initialize an empty stack and create the root node using the first element in the preorder array.
* Iterate through the remaining elements in the `preorder` array starting from the second element.
* For each element, create a new node and make it the right or left child of the previous node based on the relationship described:
  * If the current element is the left child, connect it accordingly to the previous node by setting previous.left = current.
  * If the current element is the right child or a left child of some node x where x is the right child of the previous node, we need to find the correct parent for the current element. Pop elements from the stack until the current node is no longer the right child of the top element.
      * While popping the elements, set previous to be the popped element.
      * After reaching the correct parent, make the current node the right child of the top element by setting previous.right = current.
* At the end of the iteration, return the root node.



Let's consider an example with the following preorder and inorder arrays:

```
preorder = [3, 9, 20, 15, 7]
inorder = [9, 3, 15, 20, 7]
```

Assuming we have already created the root node with value 3, and we are at the second element in the preorder array (9). 
At this point, the stack is empty.

Since 9 is the left child of 3, we create a new node with value 9 and set it as the left child of 3.

Now, we move to the next element in the preorder array, which is 20. Here's where step 3 comes into play.

    We observe that 20 is not the left child of the previous node (9), so we need to find the correct parent for 20 based on the relationships mentioned in the description.
    We pop elements from the stack until 20 is no longer the right child of the top element of the stack (i.e., until we find the correct parent for 20).
        As we pop elements, we set previous to be the popped element.
    In this case, since 20 is the right child of 3, we continue popping the stack until we reach 3.
    Once we reach 3, we assign 20 as the right child of 3 by setting previous.right = current.
    At this point, the stack only contains 3. The connections made so far are:

         3
        / \
       9  20

Next, we process the remaining elements in the preorder array (15 and 7) using the same logic.


```ts
export function buildTreeIterative(preorder: number[], inorder: number[]): TreeNode | null {
  if(preorder.length === 0) return null;
  const stack = [];
  const root = new TreeNode(preorder[0]);
  let curr = root;

  for(let i = 1, j = 0; i < preorder.length; i++) {
    // scenario 1: the next node is the left child of the current node
    if(curr.val !== inorder[j]) {
      curr.left = new TreeNode(preorder[i]);
      stack.push(curr);
      curr = curr.left;
    } else {
      // scenario 2: the next node is the right child of the current node or the parent of the current node
      j++;
      while(stack.length > 0 && stack[stack.length-1].val === inorder[j]) {
        curr = stack.pop()!;
        j++;
      }
      curr.right = new TreeNode(preorder[i]);
      curr = curr.right;
    }
  }

  return root;
}
```


