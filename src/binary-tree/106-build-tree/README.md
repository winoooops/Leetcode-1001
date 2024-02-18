# 106. Construct Binary Tree from Inorder and Postorder Traversal

Given two integer arrays `inorder` and `postorder` where inorder is the inorder traversal of a binary tree 
and postorder is the postorder traversal of the same tree, construct and return the binary tree.

Constraints:
* 1 <= inorder.length <= 3000
* postorder.length == inorder.length
* -3000 <= inorder[i], postorder[i] <= 3000
* inorder and postorder consist of unique values.
* Each value of postorder also appears in inorder.
* inorder is guaranteed to be the inorder traversal of the tree.
* postorder is guaranteed to be the postorder traversal of the tree.

## Example
```
Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]
```

```
Input: inorder = [-1], postorder = [-1]
Output: [-1]
```

## Solution

### Recursive

1. The first thing we can be sure is that the 1st item in `postorder` is the root
2. Then based on step 1, we can find its location on inorder array, which gives us left-sub tree and right-sub tree in the inorder array 
3. Then we can find the left-sub tree and right-sub tree in the postorder array by using the length of left-sub tree and right-sub tree in inorder array






