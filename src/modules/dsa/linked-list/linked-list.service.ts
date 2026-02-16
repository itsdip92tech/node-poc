import { Injectable } from '@nestjs/common';
import { Node,LinkedList } from './linkedList';

@Injectable()
export class LinkedListService {
    // This class is made stateful on purpose so that the linked list can be preserved.
    private linkedList: LinkedList<number> = new LinkedList(0); 
    
    appendNode(value:number):LinkedList<number>{
        this.linkedList.append(value);
        return this.linkedList;
    }

    prependNode(value:number):LinkedList<number>{
        this.linkedList.prepend(value);
        return this.linkedList;
    }

    insertNode(index:number,value:number):LinkedList<number>{
        this.linkedList.insert(index,value);
        return this.linkedList
    }

    removeFirstNode(): LinkedList<number> | null{
        this.linkedList.removeFirst();
        return this.linkedList;
    }

    removeLastNode(): LinkedList<number> | null{
        this.linkedList.removeLast();
        return this.linkedList;
    }

    getNode(index:number):Node<number> | null{
        return this.linkedList.get(index);
    }

    setNode(index:number,value:number):LinkedList<number>{
        this.linkedList.set(index,value);
        return this.linkedList;
    }    

    deleteList():LinkedList<number>{
        this.linkedList.head = null;
        this.linkedList.tail = null;
        this.linkedList.length = 0;
        return this.linkedList
    }

}
