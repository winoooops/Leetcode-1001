export function canCompleteCircuit(gas: number[], cost: number[]) {
  let tank = 0;
  let total = 0;
  let startPos = 0;

  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    total += gas[i] - cost[i];

    if (tank < 0) {
      startPos = i + 1;
      tank = 0;
    }
  }

  if (total < 0) return -1;
  return startPos;
}
