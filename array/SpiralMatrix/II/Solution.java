package SpiralMatrix.II;

import java.util.ArrayList;
import java.util.List;

public class Solution {
    public int[][] SpiralMatrixTwo(int n) {
        int[][] result = new int[n][n];
        if(n == 0) {
            return result;
        }

        int currNum = 1;
        int top = 0;
        int bottom = n - 1;
        int left = 0;
        int right = n - 1;

        while (top <= bottom && left <= right) {
           for(int i = left; i <= right; i++) {
               result[top][i] = currNum++;
           }
           top++;

           for(int j = top; j <= bottom; j++) {
               result[j][right] = currNum++;
           }
           right--;

           if(top <= bottom) {
               for(int x = right; x >= left; x--) {
                   result[bottom][x] = currNum++;
               }
               bottom--;
           }

           if(left <= right) {
               for(int y = bottom; y >= top; y--) {
                   result[y][left] = currNum++;
               }
               left++;
           }
        }

        return result;
    }
}
