package JumpGame.I;

public class Solution {
    public boolean canJumpI(int[] nums)
    {
        int coverage = 0;

        for(int i = 0; i <= coverage; i++)
        {
            coverage = Math.max(coverage, i + nums[i]);
            if(coverage >= nums.length - 1)
            {
                return true;
            }
        }

        return false;
    }
}
