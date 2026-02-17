import { Node,LinkedList } from "./linkedList"

export class LinkedListProblems<T>{

    // Time complexity will be O(n) since all nodes have to be touched.
    findMiddle<T>(list:LinkedList<T>):Node<T> | null{
        if(list.length == 0) return null;
        let slowPointer: Node<T> | null = list.head;
        let fastPointer: Node<T> | null = list.head;
        while(fastPointer !=null && fastPointer.next !=null){
            if(slowPointer)
                slowPointer = slowPointer?.next;
            fastPointer = fastPointer.next.next;
        }

        return slowPointer;
    }
}