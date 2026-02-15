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
}
