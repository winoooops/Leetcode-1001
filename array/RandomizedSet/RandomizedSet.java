package RandomizedSet;

import java.util.ArrayList;
import java.util.List;

public class RandomizedSet {
    List<Integer> list;

    public RandomizedSet() {
        list = new ArrayList<>();
    }

    public boolean insert(int val) {
        if(this.list.contains(val)) {
            return false;
        }
        this.list.add(val);
        return true;
    }

    public boolean remove(int val) {
        if(!this.list.contains(val)) {
            return false;
        }
        this.list.remove(Integer.valueOf(val));
        return true;
    }

    public int getRandom() {
        int seed = (int) (Math.random() * list.size());
        return list.get(seed);
    }
}
