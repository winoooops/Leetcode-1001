function findHighest(height: number[], start: number, end: number) {
  let highest = height[start];
  for (let i = start; i <= end; i++) {
    highest = Math.max(highest, height[i]);
  }

  return highest;
}

export function trapWaterBF(height: number[]): number {
  let result = 0;

  for (let i = 1; i < height.length - 1; i++) {
    const left = findHighest(height, 0, i);
    const right = findHighest(height, i, height.length - 1);
    const lowest = Math.min(left, right);
    if (lowest <= height[i]) continue;

    result += lowest - height[i];
  }

  return result;
}

export function trapWater2P(height: number[]): number {
  let result = 0;
  const length = height.length;
  const maxLeft = Array.from({length}, (_, index) =>
    findHighest(height, 0, index)
  );
  const maxRight = Array.from({length}, (_, index) =>
    findHighest(height, index, length - 1)
  );

  for (let i = 1; i < length - 1; i++) {
    result += Math.min(maxLeft[i], maxRight[i]) - height[i];
  }

  return result;
}

export function trapWaterStack(height: number[]): number {
  let result = 0;
  const stack: number[] = [];

  for (let i = 0; i < height.length; i++) {
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop()!;
      if (stack.length === 0) break;

      const distance = i - stack[stack.length - 1] - 1;
      const boundedHeight =
        Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
      result += distance * boundedHeight;
    }
    stack.push(i);
  }

  return result;
}
