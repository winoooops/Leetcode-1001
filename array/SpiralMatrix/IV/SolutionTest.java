package SpiralMatrix.IV;


import SpiralMatrix.IV.Solution;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;


public class SolutionTest {

    @Test
    public void testListNodeFromArray() {
        int[] array = { 0, 1, 2, -1 };
        ListNode node = ListNode.fromArray(array);
        int[] result = ListNode.toArray(node);
        assertArrayEquals(array, result);
    }


    @Test
    void testSprialMatrixIVOne() {
        Solution solution = new Solution();
        int m = 1;
        int n = 4;
        int[] array = {0, 1, 2, -1};
        ListNode node = ListNode.fromArray(array);

        int[][] expected = {{0,1,2,-1}};
        int[][] result = solution.SpiralMatrixIV(m, n, node);
        int[][] result2 = solution.SpiralMatrixIVTwo(m, n, node);

        assertArrayEquals(expected, result);
        assertArrayEquals(expected, result2);
    }

    @Test
    void testSpiralMatrixIVTwo() {
        Solution solution = new Solution();
        int m = 3;
        int n = 5;
        int[] array = {3,0,2,6,8,1,7,9,4,2,5,5,0};
        ListNode node = ListNode.fromArray(array);
        int[][] expected = {{3,0,2,6,8}, {5,0,-1,-1,1}, {5,2,4,9,7}};
        int[][] result = solution.SpiralMatrixIV(m,n,node);
        int[][] result2 = solution.SpiralMatrixIVTwo(m,n,node);

        assertArrayEquals(expected, result);
        assertArrayEquals(expected, result2);
    }

    @Test
    void testSpiralMatrixIVThree() {
        Solution solution = new Solution();
        int m = 1;
        int n = 4;
        int[] array = {5};
        ListNode node =ListNode.fromArray(array);

        int[][] expected = {{5, -1, -1, -1}};
        int[][] result = solution.SpiralMatrixIV(m,n,node);
        int[][] result2 = solution.SpiralMatrixIVTwo(m,n,node);
        assertArrayEquals(expected, result);
        assertArrayEquals(expected, result2);
    }

    private void print2DArray(int[][] array) {
        for(int[] row : array) {
            System.out.println(Arrays.toString(row));
        }
    }
}