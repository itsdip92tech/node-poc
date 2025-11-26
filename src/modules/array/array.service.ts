import { Injectable } from '@nestjs/common';
import { TwoSum,MaxSubArr,LongestPrefix } from './arrInterfaces';
@Injectable()
export class ArrayService {
    // Given an array of integers nums and an integer target, return the indices of the two numbers in the array such that they add up to target.
    // Time complexity=> O(n); Space Complexity => O(1)
    twoSum = (param: TwoSum): number[]=>{
        if(param.arr.length == 0){
            return [];
        }

        let mappedArr = new Map()

        for(let i =0; i<param.arr.length;i++){
            if(mappedArr.has(param.target-param.arr[i]))
                return [i,mappedArr.get(param.target-param.arr[i])]
            else
                mappedArr.set(param.arr[i],i)
        }

        return [];
    }
    // Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum, and return its sum.
    // Time complexity=> O(n); Space Complexity => O(1)
    maxSubArr = (param:MaxSubArr): number=>{

        let maxNumber = param.arr[0];

        let currentMax = param.arr[0];

        for(let i=1;i<param.arr.length;i++){
            currentMax = Math.max(currentMax,currentMax+param.arr[i]);

            maxNumber = Math.max(maxNumber, currentMax);
        }

        return maxNumber;
    }

    // Write a function to find the longest common prefix string among an array of strings
    // Time complexity=> O(s) s being the total number of characters in all the strings; Space Complexity => O(1)
    longestPrefix = (param:LongestPrefix): string=>{
        if(!param.arr.length){
            return ""
        }

        let firstStr = param.arr[0]

        for(let i  = 0;i<firstStr.length;i++){
            const char = firstStr[i]

            for(let j = 1;j<param.arr.length;j++){
                if(i === param.arr[j].length || param.arr[j][i] !== char)
                    return firstStr.slice(0,i);
            }
        }
        return firstStr;
    }
    
}
