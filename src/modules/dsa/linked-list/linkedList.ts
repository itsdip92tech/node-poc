// Issue identified - Appended nodes are added as strings. Check the reason.
// Reason was in NestJs all query params are received as strings and regardless of type annotations, 
// the methods process the values as strings. The type annotations are purely compile time checks and are 
// completely erased during transpilation. So they cannot perform runtime validation or conversion.

// The fix is adding a global transformation in the Nest initator main.js that will convert all parameters defined
// in the routes to their converted types throughout the app.

export class Node<T>{
    value: T | null;
    next:  Node<T> | null = null;

    constructor(value: T | null){
        console.log('Node constructor');
        console.log(typeof value)
        this.value = value;
    }
}

export class LinkedList<T>{
    head: Node<T> | null;
    tail: Node<T> | null;
    length: number = 0;

    constructor(value:T){
        this.head = new Node<T>(value);
        this.tail = this.head;
        this.length++;
    }

    printList(){
        let temp: Node<T> | null = this.head; 
        while(temp != null){
            console.log(temp.value);
            temp = temp.next;
        }
    }
    // Time complexity is 0(1) since only 1 node is added at the end and pointers are shifted.
    // Space complexity is O(1)
    append(value:T){
        const newNode: Node<T> = new Node<T>(value);
        if(this.length == 0){
            this.head = newNode;
            this.tail = this.head;
        }else{
            if(this.tail)
            this.tail.next = newNode;
            this.tail = newNode;  
        }
        this.length++;
    }

    // Time complexity is 0(1) since only 1 node is added at the beginning and pointers are shifted.
    // Space complexity is O(1)
    prepend(value:T){
        const newNode: Node<T> = new Node(value);
        if(this.length == 0){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    // Time complexity is 0(n) since all the nodes have to be iterated over. Best case is 0(1)
    // Space complexity is O(1)
    insert(index:number,value:T){
        if(index<0 || index>this.length) return;
        const newNode:Node<T> = new Node<T>(value);
        if(this.length == 0){
            this.head = newNode;
            this.tail = this.head;
        }else{
            console.log('Inside second check')
            let temp = this.head;
            for(let i =0; i<index -1;i++){
                if(temp)
                    temp = temp?.next;
            }
            console.log(newNode);
            if(temp){            
                newNode.next = temp.next;
                temp.next = newNode;
            }
        }
        this.length++;
    }

    // Time complexity is 0(1) since only 1 node is removed from the beginning and pointers are shifted.
    // Space complexity is O(1)
    removeFirst():Node<T> | null{
        if(this.length == 0)return null;
        const temp:Node<T> | null = this.head;
        this.head = this.head?.next ?? null;
        this.length-- ;
        return temp;
    }

    // Time complexity is 0(n) since all the nodes have to be iterated over. Best case is 0(1)
    // Space complexity is O(1)
    removeLast():Node<T> | null{
        if(this.length == 0) return null;
        let temp = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return temp;
        } 
        while(temp?.next?.next != null){
            temp = temp.next;
        }
        this.tail = temp;
        if(this.tail){
            this.tail.next = null;
        }
        this.length--;
        return temp?.next ?? null;

    }

    // Continue from remove node
    remove(index:number): Node<T> | null{
        if(this.length == 0 || index<0 || index>this.length -1) return null;

        let prevNode: Node<T> | null = this.head;
        let count = 1;
        while(count<index){
            if(prevNode)
                prevNode = prevNode.next;
            count++;
        }

        const deletedNode: Node<T> | null = prevNode?.next ?? null;
        if(prevNode){
            prevNode.next = deletedNode?.next ?? null;
        }
        if(deletedNode)
        deletedNode.next = null;
        return deletedNode;
    }

    // Time complexity is 0(n) since all the nodes have to be iterated over. Best case is 0(1)
    // Space complexity is O(1)
    get(index:number):Node<T> | null{
        if(this.length == 0 || index < 0 || index > this.length - 1) return null;
        let temp = this.head;
        for(let i = 0; i <index;i++){
            if(temp)
            temp = temp?.next;
        }
        return temp;
    }
    
    // Time complexity is 0(n) since all the nodes have to be iterated over. Best case is 0(1)
    // Space complexity is O(1)
    set(index:number,value:T): Node<T> | null{
        if(this.length == 0 || index < 0 || index > this.length -1) return null;
        let temp = this.head;
        for(let i = 0; i <index;i++){
            if(temp)
            temp = temp?.next;
        }
        if(temp)
        temp.value = value;
        return temp;
    }
    
    reverse():Node<T> | null{
        if(this.length == 0)return null;
        if(this.length == 1)return this.head;
        let temp: Node<T> | null = this.head;
        this.head = this.tail;
        this.tail = temp;

        let prevNode: Node<T> | null = null;
        let currentNode: Node<T> | null = this.tail;

        while(temp !== null){
            if(currentNode)
                currentNode = currentNode?.next;
            if(temp)
                temp.next = prevNode;
            prevNode = temp;
            temp = currentNode;
        }
        prevNode = null;
        return this.head;
    }
    
}