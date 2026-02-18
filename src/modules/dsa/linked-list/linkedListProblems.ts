import { Node,LinkedList } from "./linkedList"

export class LinkedListProblems<T>{

    // Time complexity will be O(n) since all nodes have to be touched. Space complexity will be O(1)
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

    // Time complexity will be O(n) since all nodes have to be touched. Space complexity will be O(1)
    hasLoop<T>(list:LinkedList<T>):boolean{
        if(list.length < 2 ) return false;
        let slowNode = list.head;
        let fastNode = list.head

        while(fastNode != null && fastNode.next !=null){
            if(slowNode)
            slowNode = slowNode?.next;
            fastNode = fastNode.next.next;

            if(slowNode == fastNode)return true;
        }

        return false;
    }

    // Constraint is length property should not be used. K is 1 indexed.
    // Time complexity is O(n) and space complexity is O(1);
    findKthNodeFromEnd<T>(list:LinkedList<T>,k:number):Node<T> | null{
        if(k<=0) return null;
        let slowNode = list.head;
        let fastNode = list.head;

        for(let i =1 ;i<k;i++){
            if(fastNode){
                fastNode = fastNode?.next;
            }else{
                return null;
            }
        }

        while(fastNode?.next !=null){
            if(slowNode)
                slowNode = slowNode?.next;
            fastNode = fastNode.next;
        }

        return slowNode;

    }

    removeDuplicateNodes(list:LinkedList<number>): LinkedList<number> | null{
        if(list.head == null ) return null;
        const distinctNodes = new Set<number>();
        const dummyNode: Node<number> | null= new Node<number>(0);
        dummyNode.next = list.head;
        let currentNode: Node<number> | null = list.head;
        let prevNode : Node<number> | null = dummyNode;
        while(currentNode!=null){
            if(prevNode)
                if(currentNode.value !== null && !distinctNodes.has(currentNode.value)){
                    distinctNodes.add(currentNode.value);
                    prevNode = prevNode.next;
                    currentNode = currentNode.next;
                }else{
                    prevNode.next = currentNode.next;
                    currentNode = prevNode.next;
                }
        }
        return list;
    }
    
}