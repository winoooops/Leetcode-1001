package JumpGame.II;

public class Solution {
    public int minJumpSteps(int[] nums)
    {
        int currCoverage = 0;
        int nextCoverage = 0;
        int steps = 0;

        for(int i = 0; i <= nums.length - 2; i++)
        {
            nextCoverage = Math.max(nextCoverage, i + nums[i]);
            if(i == currCoverage) {
                currCoverage = nextCoverage;
                steps++;
            }
        }

        return steps;
    }
}
