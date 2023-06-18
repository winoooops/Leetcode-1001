package RandomizedSet;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class RandomizedSetWithHash {
    List<Integer> list;
    Map<Integer, Integer> map;

    public RandomizedSetWithHash(){
       this.list = new ArrayList<>();
       this.map = new HashMap<>();
    }

    public boolean insert(int val) {
        if(map.containsValue(val)) {
            return false;
        }

        map.put(val, list.size());
        list.add(val);
        return true;
    }

    public boolean remove(int val) {
        if(!map.containsValue(val)) {
            return false;
        }

        int idx = map.get(val);
        int lastElement = this.list.get(this.list.size() - 1);
        // replace the target with last element
        list.set(idx, lastElement);
        map.put(lastElement, idx);
        // remove the target
        map.remove(val);
        list.remove(list.size() - 1);
        return true;
    }

    public int getRandom() {
        int idx = (int) (Math.random() * list.size());
        return list.get(idx);
    }
}
