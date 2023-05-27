package SpiralMatrix.II;


import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SolutionTest {
    @Test
    void testSpiralMatrixTwo1() {
        Solution solution = new Solution();
        int target = 3;
        int[][] expected = {{1,2,3}, {8,9,4}, {7,6,5}};

        int[][] result = solution.SpiralMatrixTwo(target);
        assertArrayEquals(result, expected);
    }

    @Test
    void testSpiralMatrixTwo2() {
        Solution solution = new Solution();
        int target = 1;
        int[][] expected = {{1}};

        int[][] result = solution.SpiralMatrixTwo(target);
        assertArrayEquals(result, expected);
    }
}
