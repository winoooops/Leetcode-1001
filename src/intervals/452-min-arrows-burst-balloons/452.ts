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
