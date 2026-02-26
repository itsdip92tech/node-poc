import { Injectable } from '@nestjs/common';

@Injectable()
export class HashMapService {

    // Given a string s, find the length of the longest substring without repeating characters.
    // A substring is a contiguous sequence of characters in a string
    // Time complexity is O(n)
    lenSubString = (str: string): number=>{
        let charMap = new Map();
        let left = 0;
        let maxLen = 0;

        for(let right = 0;right<str.length;right++){

            if(charMap.has(str[right]) && charMap.get(str[right]) >= left){
                left = charMap.get(str[right]) + 1;
            }
            charMap.set(str[right],right)
            maxLen = Math.max(maxLen,right-left+1);
        }

        return maxLen;
    }

    // Given a string s containing only the characters: '(' , ')' , '{' , '}' , '[' , ']'
    // A string is considered valid if:
    // Every opening bracket has a matching closing bracket of the same type.
    // Brackets are closed in the correct order (properly nested).
    // Every closing bracket must match the most recent unmatched opening bracket.

    validParentheses = (str:string):boolean=>{
        console.log(str)
        let stack:string[] = [];
        let parenthesesMap = {
            ')':'(',
            '}':'{',
            ']':'['
        }

        for(let char of str){
            if(char in parenthesesMap){
                const top = stack.pop()
                if(top !== parenthesesMap[char]) return false;
            }else{  
                stack.push(char)
            }
        }

        return stack.length  === 0;
    }



    // Items in common - function that takes two arrays as input and returns true if there is atleast one item in common
    // Time complexity is O(n+m) since all the elements have to be iterated over. Space complexity is O(n) since the first array
    // is used to create a new map.
    itemInCommon(array1: number[],array2: number[]):boolean{
        if((array1.length == 0 && array2.length == 0) || array1.length == 0 || array2.length==0) return false;

        const array1Values: Map<number,boolean> = new Map<number,boolean>();
        for(let i=0;i<array1.length;i++){
            array1Values.set(array1[i],true);
        }

        for(let j=0;j<array2.length;j++){
            if(array1Values.has(array2[j]))
                return true;
        }
        return false;
    }

    // Given an array of integers identify and return all duplicates from an array.
    // Time and space complexity is O(n) since all elements have to iterated over and new memory will be allocated in the hashmap
    // for all elements in worst case
    findDuplicates(array1:number[]):number[]{
        if(array1.length < 2) return array1;
        const distinctElements: Map<number,number> = new Map<number,number>();
        const duplicateElements: number[] = [];

        for(let i=0;i<array1.length;i++){
            let count:number = distinctElements.get(array1[i]) || 0;
            distinctElements.set(array1[i],count+1);

            if(distinctElements.get(array1[i]) == 2){
                duplicateElements.push(array1[i]);
            }
        }

        return duplicateElements;
    }

    
    // Given a string s, return the first character that does not repeat anywhere else in the string.
    // If every character repeats, return null (or an empty string, depending on preference).
    // Time complexity => O(n) Space Complexity = 0(1)
    firstNonRepeatingCharacter(value:string):string{
        if(value.length == 0) return "";
        const characterCount: Map<string,number> = new Map<string,number>();
        let targetChar:string = "";
        for(let i=0;i<value.length;i++){
            let count = characterCount.get(value[i]) || 0;
            characterCount.set(value[i],count+1);
        }

        for(const [key,value] of characterCount){
            if(value == 1){
                return key;
            }
        }

        return targetChar;
    }
    // Given an array of strings, where each string may contain only lowercase English alphabets, write a method that groups anagrams in the array
    // together. The method should return an array of arrays where each inner array contains a group of anagrams. An anagram is word that contains 
    // letters same as the original word being compared with but in a different order.
    // Time complexity is O(n.klogk) where n is the number of words and k is the length of each word. The time complexity of split and join functions
    // are O(k), however the time complexity of sort is O(klogk). The space complexity is O(n) since a new hashmap is used to map all the strings.
    groupAnagrams(words:string[]):string[][]{
        if(words.length == 0) return [];
        const anagramMap: Map<string,string[]> = new Map<string,string[]>();
        let groupAnagrams: string[][]= [];
        for(let i = 0; i< words.length; i++){
            let sortedString = words[i].split('').sort().join('');
            if(!anagramMap.has(sortedString)){
                anagramMap.set(sortedString,[words[i]]);
            }else{
                anagramMap.get(sortedString)?.push(words[i]);
            }
        }

        for(const[key,value] of anagramMap){
            groupAnagrams.push(value);
        }
        return groupAnagrams;
    }

    // Given an integer array and a target find the indices of two numbers which add up to the target.
    // Time and space complexity is O(n) since all the items in the array will be iterated over and 
    // new memory will be allocated to each item.
    findIndices(array1: number[],target: number): number[]{
        if(!Array.isArray(array1) || array1.length == 0) return [];
        const elementType = array1.every(el=>typeof el == "number" && Number.isInteger(el));
        const targetIndexes: number[] = [];
        if(elementType){
            const numToIndex: Map<number,number> = new Map<number,number>();
            for(let i = 0;i<array1.length; i++){
                const complement = target - array1[i];

                if(numToIndex.has(complement)){
                    const index = numToIndex.get(complement)!
                    return[index,i];
                }
                numToIndex.set(array1[i],i);
            }
        }

        return targetIndexes;
        
    }

    // Given an integer array and a target find the indices of all the numbers in pairs which add up to the target.
    // Time and space complexity is O(n) since all the items in the array will be iterated over and 
    // new memory will be allocated to each item.

    // Revisit
    findAllPairs(array1: number[],target: number): number[][]{
        if(!Array.isArray(array1) || array1.length == 0) return [];
        const elementType = array1.every(el=>typeof el == "number" && Number.isInteger(el));
        const targetIndexes: number[][] = [];
        if(elementType){
            const numToIndex: Map<number,number> = new Map<number,number>();
            for(let i = 0;i<array1.length; i++){
                const complement = target - array1[i];

                if(numToIndex.has(complement)){
                    const index = numToIndex.get(complement)!
                    targetIndexes.push([index,i]);
                }
                numToIndex.set(array1[i],i);
            }
        }

        return targetIndexes;
        
    }

    // subarray sum - find the indices of a contiguous subarray from a given input that add up to a target sum. 
    // Input contains an array of negative and positive integers and a target sum.
    // output should include the indices in an array format.
    subArraySum(array1:number[],target:number):number[]{
        if(!Array.isArray(array1) || array1.length == 0) return [];
        const elementType = array1.every(el=> typeof el == "number" && Number.isInteger(el));
        let contiguousSubArray : number[] = [];
        if(elementType){

            const sumToIndex: Map<number,number> = new Map<number,number>([[0,-1]]);
            let prefixSum: number = 0;
            for(let i =0; i< array1.length; i++){
                prefixSum = prefixSum + array1[i];
                
                sumToIndex.set(prefixSum,i);
                
                if(sumToIndex.has(prefixSum - target)){
                    contiguousSubArray.push(sumToIndex.get(prefixSum - target)! + 1);
                    contiguousSubArray.push(i);
                    return contiguousSubArray;
                }                
            }
               
        }
        return contiguousSubArray;
    }

    // Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.
    //  The value of |x| is defined as: x if x >= 0.-x if x < 0.

    // There are two mathematical solutions to this problem since absolute value is considered.
    // i - j = k
    // i - j  = -k i.e
    // i-k = j
    // i+k = j where i is the current number, j is the number seen before and k is the difference.
    // Time and space complexity is O(n)
    pairsWithDifference(array1:number[],k:number):number{
        const numToCount: Map<number,number> = new Map<number,number>();
        let numberOfPairs = 0;
        for(let i = 0;i<array1.length;i++){
            let count = numToCount.get(array1[i]) || 0;
            numberOfPairs += numToCount.get(array1[i]-k) || 0;
            numberOfPairs += numToCount.get(array1[i]+k) || 0;
            numToCount.set(array1[i],count + 1);
        } 

        return numberOfPairs;
    }

}
