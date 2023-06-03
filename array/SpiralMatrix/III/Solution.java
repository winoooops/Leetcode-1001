package SpiralMatrix.III;

public class Solution {
    public int[][] SpiralMatrixThree(int rows, int cols, int rStart, int cStart) {
        int totalLength = rows * cols;

        int[][] result = new int[totalLength][2];
        if (rows < 0 || cols < 0 || rStart < 0 || rStart >= rows || cStart < 0 || cStart >= cols) {
            throw new IllegalArgumentException("Input is invalid");
        }
        // init step
        result[0] = new int[] { rStart, cStart };

        if(totalLength == 1) {
            return result;
        }

        // direction matrix
        int[][] directions = new int[][]{ {0, 1}, {1, 0}, {0,-1}, {-1,0}};

        int totalSteps = 1;
        int dirIdx = 0; // use to control which direction to go
        int maxSteps = 0; // the maximum steps can take in one direction
        int rowAt = rStart; // current rowAt
        int colAt = cStart; // current colAt


        while(totalSteps < totalLength) {
            System.out.println("total steps: " + totalSteps);
            System.out.println("direction index:" + dirIdx);
            // the max distance is incremented in even time
            if(dirIdx == 0 || dirIdx == 2) {
                maxSteps++;
            }
            for(int i = 0; i < maxSteps; i++) {
                rowAt = rowAt + directions[dirIdx][0];
                colAt = colAt + directions[dirIdx][1];
                // check if the move is within the boundary
                if (rowAt >= 0 && rowAt < rows && colAt >= 0 && colAt < cols) {
                    result[totalSteps++] = new int[]{ rowAt, colAt };
                    if(totalSteps == totalLength) {
                        return result;
                    }
                }
            }

            dirIdx = (dirIdx + 1) % 4;
        }

        return result;
    }
}
