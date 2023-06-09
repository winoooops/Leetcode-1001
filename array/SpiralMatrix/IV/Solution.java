package SpiralMatrix.IV;

import java.util.Arrays;

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
