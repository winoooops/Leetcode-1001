package SpiralMatrix.IV;

import java.util.ArrayList;
import java.util.List;

public class ListNode {
    int val;
    ListNode next;

    ListNode() {
        next = null;
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }

    public static ListNode fromArray(int[] array) {
        int length = array.length;
        if(length == 0) {
            return null;
        }
        int index = length - 1;
        ListNode prev = null;
        ListNode curr = null;

        while(index >= 0) {
          curr = new ListNode(array[index--], prev);
          prev = curr;
        }

        return curr;
    }

    public static int[] toArray(ListNode node) {
        ArrayList<Integer> result = new ArrayList<Integer>();
        while (node != null) {
            result.add(node.val);
            node = node.next;
        }

        return result.stream().mapToInt(i -> i).toArray();
    }

    public static String showNode(ListNode node) {
        String str = "";
        while(node != null) {
            str = str + node.val + "=>";
            node = node.next;
        }

        return str + "null";
    }
}
