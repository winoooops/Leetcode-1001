# 螺旋矩阵I 

给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

示例1: 

![spiral1](../../static/img/array/spiral1.jpeg)

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

示例2: 

![spiral2](../../static/img/array/spiral2.jpeg)

```
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
```

## 解题思路

> Set the Boundaries and keep track of columns and rows. 


### 左开右闭`(left, right]`
```typescript 
type Matrix = Array<Array<number>>

export function spiralMatrixOne(matrix: Matrix) {
  const list = []

  if(!matrix.length) return list

  let rowBegin = 0;
  let rowEnd = matrix.length - 1;

  let columnBegin = 0;
  let columnEnd = matrix[0].length - 1;

  while(rowBegin <= rowEnd && columnBegin <= columnEnd) {
    // 四个循环分别控制matrix的向右, 向下, 向左, 向上移动
    
    // 向右移动
    for(let i = columnBegin; i <= columnEnd; i++ ) {
      list.push(matrix[rowBegin][i])
    }
    rowBegin++

    // 向下移动
    for(let j = rowBegin; j <= rowEnd; j++) {
      list.push(matrix[j][columnEnd])
    }
    columnEnd--

    // 向右移动
    // 需要注意当rowBegin被增加到等于rowEnd的特殊情况
    if(rowBegin <= rowEnd) { 
      for(let x = columnEnd; x >= columnBegin; x--) {
        list.push(matrix[rowEnd][x])
      }
      rowEnd--
    }

    // 向上移动
    // 需要注意特殊情况
    if(columnBegin <= columnEnd) {
      for(let y = rowEnd; y >= rowBegin; y--) {
        list.push(matrix[y][columnBegin])
      }
      columnBegin++
    }
  }
  return list
}
```

### 左闭右开`[left, right)`
```typescript
type Matrix = Array<Array<number>>

export function spiralMatrixOne(matrix: Matrix) {
  const list = []

  if(!matrix.length) return list

  let rowBegin = 0;
  let rowEnd = matrix.length - 1;

  let columnBegin = 0;
  let columnEnd = matrix[0].length - 1;

  while(rowBegin < rowEnd && columnBegin < columnEnd) {
    // 四个循环分别控制matrix的向右, 向下, 向左, 向上移动
    
    // 向右移动
    for(let i = columnBegin; i < columnEnd; i++ ) {
      list.push(matrix[rowBegin][i])
    }

    // 向下移动
    for(let j = rowBegin; j < rowEnd; j++) {
      list.push(matrix[j][columnEnd])
    }

    // 向右移动
    for(let x = columnEnd; x > columnBegin; x--) {
      list.push(matrix[rowEnd][x])
    }

    // 向上移动
    for(let y = rowEnd; y > rowBegin; y--) {
      list.push(matrix[y][columnBegin])
    }
    // 四个方向都移动过之后矩阵缩小    
    rowBegin++
    rowEnd--
    columnBegin++
    columnEnd--
  }
  
  // 因为右边不闭合的原因, 最后总是会剩下几个格子没有在while中被遍历
  if(rowBegin === rowEnd) {
    for(let z = columnBegin; z <= columnEnd ;z++){
      list.push(matrix[rowBegin][z])
    }
  } else if(columnBegin === columnEnd) {
    for(let z = rowBegin; z <= rowEnd; z++) {
      list.push(matrix[z][columnBegin])
    }
  }

  return list
}
```


# 螺旋矩阵II

给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

示例1:

![spiral](../../static/img/array/spiral.jpeg)

```
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
```

示例2:
```
输入：n = 1
输出：[[1]]
```


## 解题思路

模拟顺时针画矩阵的过程:

填充上行从左到右
填充右列从上到下
填充下行从右到左
填充左列从下到上
由外向内一圈一圈这么画下去。

和**螺旋矩阵I**类似, 我们也是需要在四个方向上分别遍历, 只需要主要区间开和闭的统一即可. 

### 左开右闭`(left, right]`
```typescript
export function sprialMatrixTwo(n: number) {
  const result: Array<number[]> = new Array(n).fill(1).map(i => new Array(n));

  let rowBegin = 0;
  let rowEnd = n - 1;
  let columnBegin = 0;
  let columnEnd = n - 1;
  let number = 1

  while(rowBegin <= rowEnd && columnBegin <= columnEnd) {
    // left -> right 
    for(let i = columnBegin ; i <= columnEnd ; i++) {
      result[rowBegin][i] = number
      number++
    }
    rowBegin++
    
    // top -> bottom
    for(let i = rowBegin ; i <= rowEnd; i++ ) {
      result[i][columnEnd] = number
      number++
    }
    columnEnd--

    // right -> left 
    for(let i = columnEnd; i >= columnBegin; i--) {
      result[rowEnd][i] = number
      number++
    }
    rowEnd--

    // bottom -> top 
    for(let i = rowEnd; i >= rowBegin; i--) {
      result[i][columnBegin] = number
      number++
    }
    columnBegin++
  }
  return result
}
```

# 螺旋矩阵III

在 R 行 C 列的矩阵上，我们从 (r0, c0) 面朝东面开始

这里，网格的西北角位于第一行第一列，网格的东南角位于最后一行最后一列。

现在，我们以顺时针按螺旋状行走，访问此网格中的每个位置。

每当我们移动到网格的边界之外时，我们会继续在网格之外行走（但稍后可能会返回到网格边界）。

最终，我们到过网格的所有 R * C 个空间。

按照访问顺序返回表示网格位置的坐标列表。

![spiral](../../static/img/array/spiral3.png)


## 解题思路
注意到我们每次移动的步数都是规律的, 类似下面这样

![steps](../../static/img/array/steps.png)

用数组来表示出来的话就是:[1,1,2,2,3,3,4,4,...]

```
export function isValid(R: number, C: number, rowAt: number, columnAt: number) {
  return rowAt >= 0 && rowAt < R && columnAt >= 0 && columnAt < C 
}

export function spiralMatrixThree(R: number, C: number, r0: number, c0: number) {
  const result = []
  // 横纵坐标上移动的方向
  const directionOfRow = [1,0,-1,0]
  const directionOfCol = [0,1,0,-1]

  let steps = 0;         // 当前方向上行走的步数
  let maxSteps = 1;      // 当前方向上最多能走几步
  let totalSteps = 1;    // 在操作行走的中部署
  let direction = 0;     // 控制方向: 0 => 向东, 1 => 向南, 2 => 向西, 3 => 向北 
  let change = 0;        // 方向改变计数, 如果等于二 => maxSteps++

  result.push([r0, c0])  // 先把起点推进去

  while(totalSteps < R * C) {
    // 计算横纵坐标的增量
    r0 += directionOfRow[direction % 4]
    c0 += directionOfCol[direction % 4]
    
    // 判断是否在场地内
    if(isValid(R, C, r0, c0)) {
      totalSteps++
      result.push([r0,c0])
    }
    
    // 实际行走的步数都要+1
    steps++

    // 如果行走到最后一步, 调换方向
    if(steps === maxSteps) {
      direction++
      change ++
      steps = 0
    }
    
    // 如果是第二次调换方向, 增加行走步数[1,1,2,2,3,3,4,4,...]
    if(change === 2){
      maxSteps++
      change = 0
    }
  }

  return result
}

```

# 2326.螺旋矩阵IV
给你两个整数：m 和 n ，表示矩阵的维数。

另给你一个整数链表的头节点 head 。

请你生成一个大小为 m x n 的螺旋矩阵，矩阵包含链表中的所有整数。链表中的整数从矩阵 左上角 开始、顺时针 按 螺旋 顺序填充。如果还存在剩余的空格，则用 -1 填充。

返回生成的矩阵。


## 示例

![example1](../../static/img/array/spiralMatrix4-1.jpg)
```
输入：m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
输出：[[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
解释：上图展示了链表中的整数在矩阵中是如何排布的。
注意，矩阵中剩下的空格用 -1 填充。
```


![example2](../../static/img/array/spiralMatrix4-2.jpg)
```
输入：m = 1, n = 4, head = [0,1,2]
输出：[[0,1,2,-1]]
解释：上图展示了链表中的整数在矩阵中是如何从左到右排布的。
注意，矩阵中剩下的空格用 -1 填充。
```

## 思路

### 模拟法
通过模拟遍历举证
* 按照顺时针方向将链表的节点值填入矩阵, 当移动到边界的时候顺时针调整方向
* 将矩阵的所有元素初始化为`-1`, 如果不为`-1`, 那么代表该位置已被访问
* 通过判断当前节点同方向的下个节点是否在范围内(并且节点值不为-1)来判断是否调转方向

> 时间复杂度`O(m * n)`, 因为需要遍历每一个元素并填充值
> 空间复杂度`O(1)`

```java
public class Solution {
    private final int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    public int[][] SpiralMatrixIV(int m, int n, ListNode head){
        int[][] result = new int[m][n];
        for(int i = 0; i < m; i++) {
            Arrays.fill(result[i], -1);
        }

        ListNode temp = head;
        int dirIdx = 0;
        int rowAt = 0;
        int colAt = 0;

        while(temp != null) {
            // should update the values in the result
            result[rowAt][colAt] = temp.val;
            temp = temp.next;

            int rowCandidate = rowAt + directions[dirIdx][0];
            int colCandidate = colAt + directions[dirIdx][1];
            // determine if the direction need to be changed
            if(
                    rowCandidate < 0 ||
                    colCandidate < 0 ||
                    rowCandidate >= m ||
                    colCandidate >= n ||
                    result[rowCandidate][colCandidate] != -1
            ) {
                dirIdx = (dirIdx + 1) % 4;
            }
            rowAt += directions[dirIdx][0];
            colAt += directions[dirIdx][1];
        }

        return result;
    }
}

```

### 遍历法
可以使用按层遍历的思想. 
* 按层数遍历2D数组, 然后统一附上初始值-1
* 定义4个边界分别为`top, bottom, left, right`, 然后根据移动的方向填充值, 方向结束后压缩矩阵
    * 从left到right,依次遍历 `result[top][index]` 填充值, 最后top++
    * 从top到bottom,依次遍历 `result[index][right]` 填充值, 最后right--
    * 从right到left,依次遍历 `result[bottom][index]` 填充值, 最后bottom--
    * 从bottom到top,依次遍历 `result[index][left]` 填充值, 最后left++
    * 注意特殊情况下, 需要算多出来的内部区域

```java
public class Solution {
    public int[][] SpiralMatrixIVTwo(int m, int n, ListNode head)
    {
        int[][] result = new int[m][n];

        for(int i = 0; i < m; i++) {
            Arrays.fill(result[i], -1);
        }

        int top = 0;
        int bottom = m - 1;
        int left = 0;
        int right = n - 1;
        ListNode temp = head;

        while(temp != null) {
            for(int i = left; i <= right && temp != null; i++) {
                result[top][i] = temp.val;
                temp = temp.next;
            }
            top++;

            for(int j = top; j <= bottom && temp != null; j++) {
                result[j][right] = temp.val;
                temp = temp.next;
            }
            right--;

            if(top <= bottom) {
                for(int x = right; x >= left && temp != null; x--) {
                    result[bottom][x] = temp.val;
                    temp = temp.next;
                }
                bottom--;
            }

            if(left <= right) {
                for(int y = bottom; y >= top && temp != null; y--) {
                    result[y][left] = temp.val;
                    temp = temp.next;
                }
                left++;
            }
        }

        return result;
    }
}

```
