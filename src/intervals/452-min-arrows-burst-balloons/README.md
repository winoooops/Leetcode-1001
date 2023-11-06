# 452. Minimum Number of Arrows to Burst Balloons

There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array points, return the minimum number of arrows that must be shot to burst all balloons.



## Example
```
Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
```

```
Input: points = [[1,2],[3,4],[5,6],[7,8]]
Output: 4
Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.
```

```
Input: points = [[1,2],[2,3],[3,4],[4,5]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].
```

## Solution

To complete this shooting mission with minimal arrows, we have to make sure each arrow shots as many balloons as possible.
That means, we need to first know how the balloons are overlapping.

```
1 - - - - 6
  2 - - - - - 8
            7 - - - - 12
                  10- - - - - 16
```

### Greedy

So if each of the arrows are only shot on overlapping positions of those balloons, then ultimately we could make sure the minimal arrows is to be shot to complete this mission

* sort the balloons first(base on the left margin) 
* iterate through the balloons, 
  * if the current balloons is not overlapping with the previous one, then one more arrow is needed 
  * if there's an overlapping, a then we need to shoot the arrow at the left balloon's right margin, which is at `min(points[i][1], points[i-1][1])`

```ts
export function findMinArrowShots(points: number[][]): number {
  let arrows = 1;

  points.sort((a,b) => a[0] - b[0]);

  for(let i = 1; i < points.length; i++) {
    if(points[i][0] > points[i -1][1]) {
      arrows++;
    } else {
      points[i][1] = Math.min(points[i-1][1], points[i][1]);
    }
  }

  return  arrows;
}
```

### Greedy with improvement
if we first sort the balloons based on their right margins, then in condition such as `points = [[1, 4], [5, 6], [3, 7]]`
```
1 - - 4
        5 6
    3 - - - 7    
```
we don't have to update previous balloon's right margin after shooting

```ts
export function findMinArrowShotsTwo(points: number[][]): number {
  let arrows = 1;

  points.sort((a,b) => a[1] - b[1]);

  let pos = points[0][1];
  for(let balloon of points) {
    if(balloon[0] > pos) {
      arrows++;
      pos = balloon[1];
    }
  }

  return arrows;
}
```

