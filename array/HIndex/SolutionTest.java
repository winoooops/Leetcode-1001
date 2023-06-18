package HIndex;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.Arrays;

public class SolutionTest {
    @ParameterizedTest
    @CsvSource({
            "3 0 6 1 5, 3",
            "1 3 1, 1",
            "1 3 5 7 10 13, 4",
            "1, 1"
    })
    void testHIndexBinarySort(String citationstr, int expected)
    {
        Solution solution = new Solution();
        int[] citations = Arrays.stream(citationstr.split(" ")).mapToInt(Integer::parseInt).toArray();
        int result = solution.hIndexBinarySort(citations);
        Assertions.assertEquals(expected, result);
    }


    @ParameterizedTest
    @CsvSource({
            "3 0 6 1 5, 3",
            "1 3 1, 1",
            "1 3 5 7 10 13, 4",
            "1, 1"
    })
    void testHIndexBucketSort(String citationstr, int expected)
    {
        Solution solution = new Solution();
        int[] citations = Arrays.stream(citationstr.split(" ")).mapToInt(Integer::parseInt).toArray();
        int result = solution.hIndexBucketSort(citations);

        Assertions.assertEquals(expected, result);
    }
}
