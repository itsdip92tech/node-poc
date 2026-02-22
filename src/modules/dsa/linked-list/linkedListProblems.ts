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
                    currentNode.next = null;
                    currentNode = prevNode.next;
                }
        }
        return list;
    }
    
    // Doubling method
    // Time complexity will be O(n) and space complexity will be O(1)
    binaryToDecimal(list:LinkedList<number>): number {
        if(list.head == null) return 0;
        let decimal: number = 0;
        let temp: Node<number> | null = list.head;
        while(temp != null && temp.value != null){
            decimal =  (decimal*2) + temp.value;
            temp = temp.next;
        }
        return decimal;        
    }

    // Time complexity is O(n) since all nodes have to be checked and space complexity is O(1)
    partitionList(list:LinkedList<number>, x:number):LinkedList<number> |  null{
        if(list.head == null) return null;
        if(list.head.next == null) return list;

        let dummy1List: LinkedList<number> = new LinkedList<number>(0);
        let dummy2List: LinkedList<number> = new LinkedList<number>(0);
        let tempNode: Node<number> | null = list.head;

        while(tempNode != null && tempNode.value != null){
            if(tempNode.value < x){
                dummy1List.append(tempNode.value); 
            }else{
                dummy2List.append(tempNode.value);
            }
            tempNode = tempNode.next;
        }
        if(dummy1List.tail !=null && dummy2List.head !=null){
            dummy1List.tail.next = dummy2List.head.next;
            dummy2List.head.next = null;
        }
        if(dummy1List.head !=null)
        dummy1List.head = dummy1List.head.next;

        return dummy1List;
        
    }

    // Leetcode - 92
    reverseListBetweenNodes(list:LinkedList<T>,m:number,n:number):LinkedList<T> | null{
        if(list.head == null || list.head.next == null) return null;
        const dummyNode: Node<T> | null = new Node<T>(null);
        dummyNode.next = list.head;
        let prevNode: Node<T> | null = dummyNode;
        let currentNode: Node<T> | null = list.head;
        let nextNode: Node<T> | null = currentNode.next;

        for(let i=0;i<m;i++){
            if(prevNode !=null)
            prevNode = prevNode?.next;
            if(currentNode !=null)
            currentNode  = currentNode?.next;
            if(nextNode !=null)
            nextNode = nextNode?.next;
        }

        for(let i =0; i<n-m;i++){
            if(currentNode !=null && nextNode !=null)
                currentNode.next = nextNode?.next;
            if(nextNode !=null && prevNode != null)
                nextNode.next = prevNode.next;
            if(prevNode !=null)
                prevNode.next = nextNode;
            if(nextNode !=null && currentNode != null)
                nextNode = currentNode.next;
        }
        return list;
    }

    // Leetcode-24
    // Time complexity will be O(n) since all nodes in the list will be touched.
    // Space complexity is O(1)
    swapNodes(list:LinkedList<T>):LinkedList<T> | null{
        if(list.head == null) return null;
        if(list.head.next == null) return list;

        let dummyNode: Node<T> | null = new Node<T>(null);
        dummyNode.next = list.head;
        let prevNode: Node<T> | null = dummyNode;
        let currentNode: Node<T> | null = list.head;
        let nextNode: Node<T> | null = currentNode.next;

        while(currentNode!= null && nextNode !==null){
            currentNode.next  = nextNode.next;
            nextNode.next = prevNode.next;
            prevNode.next = nextNode;

            // Shifting the pointers to the next set of nodes in the list
            prevNode = currentNode;
            currentNode = currentNode.next;
            if(currentNode)
                nextNode = currentNode.next;
        }

        list.head = dummyNode.next;

        return list;
    }
}