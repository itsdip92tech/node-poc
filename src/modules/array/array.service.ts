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

    // Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
    // Notice that the solution set must not contain duplicate triplets.
    threeSum = (param:MaxSubArr): number[][]=>{
        param.arr.sort((a:number,b:number)=>a-b);
        let tripletsArr: number[][] = [];

        for(let i=0;i<param.arr.length-2;i++){
            // Skip duplicates
            if(i>0 && param.arr[i] == param.arr[i-1]) continue;

            let num = [...param.arr]
            let left = i+1;
            let right = param.arr.length-1;
            

            while(left<right){
                const sum = num[i]+num[left]+num[right];

                if(sum == 0){
                    tripletsArr.push([num[i],num[left],num[right]])

                    // Shorten the two pointers window
                    left++;
                    right--;

                    // Remove duplicates for left by checking if the value at the previous index is similar or not.
                    while(left<right && num[left] === num[left-1]) left++;
                    while(left<right && num[right] === num[right+1]) right--;
                // If sum is less than 0, a greater number will be on the right in a sorted array
                }else if(sum<0){
                    left++;
                // If sum is greater than 0, a smaller number will be on the left in a sorted array
                }else{
                    right--
                }
            }
        }

        return tripletsArr;
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

    // You are given an array prices where prices[i] is the price of a given stock on the ith day.
    // You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
    // Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
    maxProfit = (param: MaxSubArr): number=>{
        let minPrice = Infinity;
        let maxPrice = 0

        for(let price of param.arr){
            minPrice = Math.min(minPrice,price)
            maxPrice = Math.max(maxPrice, price - minPrice);
        }

        return maxPrice;
    }
    
    // Given a jagged array (an array of arrays where each inner array can have a different length), 
    // write an algorithm to find the largest numeric value in the entire structure.
    maxValJaggedArr = (param: number[]):number=>{
        let largestNumber =0;
        if(typeof param == "number"){
            return Math.max(largestNumber,param)
        }

        if(Array.isArray(param) && param.length>0){
            for(const el in param){
                if(Array.isArray(param[el])){
                    largestNumber = this.maxValJaggedArr(param[el])
                }
            }
            return largestNumber;
        }

        return 0;
    }

    // Given a string s, find the length of the longest substring that contains no repeated characters.
    longestSubstring(param:string):number{
        let maxLength = 0;
        let charSet = new Set();
        let left = 0;
       
        for(let right =0;right<param.length;right++){

            // Keep removing elements from the left side of the set until the duplicate character has been removed
            while(charSet.has(param[right])){
                charSet.delete(param[left])
                left++;
            }

            charSet.add(param[right])
            maxLength = Math.max(maxLength,right-left+1)
        }

        return maxLength;
    }
}
