import { Injectable } from '@nestjs/common';

@Injectable()
export class TreeService {
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
