import { Injectable } from '@nestjs/common';
import { Node,LinkedList } from './linkedList';
import { LinkedListProblems } from './linkedListProblems';

@Injectable()
export class LinkedListService {
    // This class is made stateful on purpose so that the linked list can be preserved and each method can use that list.
    private linkedList: LinkedList<number> = new LinkedList(0)
    constructor(private linkedListProblems: LinkedListProblems<number>){}

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

    removeNode(index:number): LinkedList<number> | null{
        this.linkedList.remove(index);
        return this.linkedList;
    }

    getNode(index:number):Node<number> | null{
        return this.linkedList.get(index);
    }

    setNode(index:number,value:number):LinkedList<number>{
        this.linkedList.set(index,value);
        return this.linkedList;
    }    

    reverse(): LinkedList<number> | null{
        this.linkedList.reverse();
        return this.linkedList;
    }

    deleteList():LinkedList<number>{
        this.linkedList.head = null;
        this.linkedList.tail = null;
        this.linkedList.length = 0;
        return this.linkedList
    }

    // Interview problems
    findMiddleNode():Node<number> | null{
        return this.linkedListProblems.findMiddle(this.linkedList);
    }
}
