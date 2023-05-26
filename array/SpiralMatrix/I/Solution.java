package SpiralMatrix.I;

import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<Integer> SpiralMatrixRightClosed(int[][] matrix) {
        List<Integer> result = new ArrayList<>();
        int rowBegin = 0;
        int rowEnd = matrix.length - 1;

        int colBegin = 0;
        int colEnd = matrix[0].length - 1;

        while(rowBegin <= rowEnd && colBegin <= colEnd) {
           for(int i = colBegin; i <= colEnd; i++) {
               result.add(matrix[rowBegin][i]);
           }
           rowBegin++;

           for(int j = rowBegin; j <= rowEnd; j++) {
               result.add(matrix[j][colEnd]);
           }
           colEnd--;

           if (rowBegin <= rowEnd) {
               for(int m = colEnd; m >= colBegin; m--) {
                   result.add(matrix[rowEnd][m]);
               }
               rowEnd--;
           }

           if(colBegin <= colEnd) {
               for(int n = rowEnd; n >= rowBegin; n--) {
                   result.add(matrix[n][colBegin]);
               }
               colBegin++;
           }
        }

        return result;
    }

    public List<Integer> SpiralMatrixRightOpened(int[][] matrix) {
        List<Integer> result = new ArrayList<>();
        if(matrix == null || matrix.length == 0) return result;

        int rowBegin = 0;
        int rowEnd = matrix.length - 1;
        int colBegin = 0;
        int colEnd = matrix[0].length - 1;

        while(rowBegin <= rowEnd && colBegin <= colEnd) {
            for(int i = colBegin; i < colEnd; i++) {
                result.add(matrix[rowBegin][i]);
            }

            for(int j = rowBegin; j < rowEnd; j++) {
                result.add(matrix[j][colEnd]);
            }

            for(int m = colEnd; m > colBegin; m--) {
                result.add(matrix[rowEnd][m]);
            }

            for(int n = rowEnd; n > rowBegin; n--) {
                result.add(matrix[n][colBegin]);
            }

            rowBegin++;
            rowEnd--;
            colBegin++;
            colEnd--;

        }

        // 当较小的内圈为奇数时, 固定会剩内圈
        if(Math.min(matrix.length, matrix[0].length) %2 == 1) {
            if(matrix.length < matrix[0].length) {
               for(int z = colBegin; z <= colEnd; z++) {
                   result.add(matrix[rowBegin][z]);
               }
            } else {
                for(int z = rowBegin; z <= rowEnd; z++) {
                    result.add(matrix[z][colBegin]);
                }
            }
        }


        return result;
    }
}


// for (left, right]
// rowBegin rowEnd colBegin colEnd
// [] => 0 2 0 3
// [1,2,3,4] => 1 2 0 3
// [1,2,3,4,8,12] => 1 2 0 2
// [1,2,3,4,8,12,11,10,9] => 1 1 0 2
// [1,2,3,4,8,12,11,10,9,5] => 1 1 1 2
// [1,2,3,4,8,12,11,10,9,5,6,7] => 1 1 1 1

