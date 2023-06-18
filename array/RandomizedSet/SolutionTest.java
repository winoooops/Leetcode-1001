package RandomizedSet;


import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class SolutionTest {
    @Test
    void testClass(){
        RandomizedSet rmSet = new RandomizedSet();

        Assertions.assertTrue(rmSet.insert(1));
        Assertions.assertFalse(rmSet.remove(2));
        Assertions.assertTrue(rmSet.insert(2));
        Assertions.assertTrue(rmSet.getRandom() == 1 || rmSet.getRandom() == 2);
        Assertions.assertTrue(rmSet.remove(1));
        Assertions.assertFalse(rmSet.insert(2));
        Assertions.assertEquals(2, rmSet.getRandom());
    }

    @Test
    void testClass2(){
        RandomizedSetWithHash rmSet = new RandomizedSetWithHash();

        Assertions.assertTrue(rmSet.insert(1));
        Assertions.assertFalse(rmSet.remove(2));
        Assertions.assertTrue(rmSet.insert(2));
        Assertions.assertTrue(rmSet.getRandom() == 1 || rmSet.getRandom() == 2);
        Assertions.assertTrue(rmSet.remove(1));
        Assertions.assertFalse(rmSet.insert(2));
        Assertions.assertEquals(2, rmSet.getRandom());
    }
}
