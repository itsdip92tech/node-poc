import { Injectable } from '@nestjs/common';

class BTreeNode{
    value:any;
    right: BTreeNode | null;
    left: BTreeNode | null;
    constructor(val:any){
        this.value = val;
        this.left = null;
        this.right = null;
     }
}

@Injectable()
export class TreeService {

    root: BTreeNode | null = null;

    

    private insertNode = (node:BTreeNode | null,value:any):BTreeNode=>{

            // Check if root exists
            if(node == null){
                node = new BTreeNode(value);
                return node;
            }

            if(node.value !== null && value > node.value){
                node.right = this.insertNode(node.right,value);
            }
            else if(node.value !== null && value<node.value){
                node.left = this.insertNode(node.left,value);
            }

            return node;
    }

    buildFromArray  = (param:any[]):BTreeNode | null=>{
        const insert =(value:any): void=>{
        this.root = this.insertNode(this.root,value);
        }
        for(let val of param){
            insert(val);
        }
        return this.root;
    }


    depthFirstTraversal  = (param: any[]): any[] =>{

        let root = null;

        return []
    }




    // Given an arbitrarily nested data structure consisting of objects (dictionaries), arrays (lists), and primitive values, 
    // write a function that returns the sum of all numeric values contained anywhere within the structure.
    depthFirstSearch = (param: Record<string, any>): number =>{
        // Safety check to ensure parameter has values inside
        let total = 0;
        
        // If the object value is a number, add it to the total
        if(typeof param == 'number'){
            return param;
        }
        
        // If the object value is another array, perform recursion
        if(Array.isArray(param) && param.length>0){
            for(const el in param){
                total += this.depthFirstSearch(param[el]);
            }
            return total; 
        }

        // If the object value is another object, perform recursion
        if(typeof param == "object"){
            for(const key in param){
                total += this.depthFirstSearch(param[key]);
            }
            return total
        }

        return 0;
    }
}

class Animal{
    speak(){
        return 1+1
    }
}

export class Dog extends Animal{
    speak(){
        return 2+3;
    }
}
