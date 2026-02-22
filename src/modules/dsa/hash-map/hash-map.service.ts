import { Injectable } from '@nestjs/common';

@Injectable()
export class HashMapService {
    // Given a string s, return the first character that does not repeat anywhere else in the string.
    // If every character repeats, return null (or an empty string, depending on preference).
    // Time complexity => O(n) Space Complexity = 0(1)
    nonRepeatingChar = (str:string):string=>{

        let charSet = {}

        // Identify the number of instances of a character
        for(let char of str){
            charSet[char] = (charSet[char] || 0) +1
        }

        // Extract the first character which has one instance
        for(let char of str){
            if(charSet[char] == 1){
                return char
            }
        }

        return ""
    }

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

    // Identify and return all duplicates from an array.
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

    // Find first non repeating character
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

    // Time complexity is O(n) and space complexity is 
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


}
