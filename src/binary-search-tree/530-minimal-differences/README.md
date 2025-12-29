# 530. Minimum Absolute Difference in BST

Given the root of a Binary Search Tree (BST), 
return the minimum absolute difference between the values of any two different nodes in the tree.

Constraints:

* The number of nodes in the tree is in the range [2, 104].
* 0 <= Node.val <= 105

## Example

```
Input: root = [4,2,6,1,3]
Output: 1
```

```
Input: root = [1,0,48,null,null,12,49]
Output: 1
```

## Solutions
> The majority of BST problems can be solved by in-order traversal since it is sorted.

Because this is a BST, so we can think of this as a ordered array, hence we can use in-order traversal to get the ordered array, and then we can get the minimum difference between the adjacent elements in the array.



