package SpiralMatrix.I;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

public class SolutionTest {
    @Test
    void testSpiralMatrixOne() {
        Solution solution = new Solution(); 
        int[][] matrix = { {1,2,3,4},{5,6,7,8}, {9,10,11,12 }};
        List<Integer> expected = List.of(1,2,3,4,8,12,11,10,9,5,6,7);
        List<Integer> result = solution.SpiralMatrixRightClosed(matrix);
        List<Integer> result2 = solution.SpiralMatrixRightOpened(matrix);

        assertIterableEquals(expected, result);
        assertIterableEquals(expected, result2);
    }

    @Test
    void testSpiralMatrixTwo() {
        Solution solution = new Solution();
        int[][] matrix = { {1,2,3},{4,5,6}, {7,8,9}};
        List<Integer> expected = List.of(1,2,3,6,9,8,7,4,5);
        List<Integer> result = solution.SpiralMatrixRightClosed(matrix);
        List<Integer> result2 = solution.SpiralMatrixRightOpened(matrix);

        assertIterableEquals(expected, result);
        assertIterableEquals(expected, result2);
    }
}
