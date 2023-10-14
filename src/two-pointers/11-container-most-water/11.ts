export function maxArea(height: number[]): number {
  let slow = 0;
  let fast = height.length - 1;
  let area = 0;

  while(slow < fast) {
    let distance = fast - slow;
    let length = Math.min(height[slow], height[fast]);

    area = Math.max(area, distance * length);

    // to make sure the results is to be the largest
    // move the smaller value of the two to next position
    if(height[slow] < height[fast]) slow++;
    else fast--;
  }

  return area;
}
