import { Injectable } from '@nestjs/common';

@Injectable()
export class SetService {

    // Given a string, determine whether any duplicate characters exist inside or not. 
    hasUniqueCharacters(word:string):boolean{
        const characters: Set<string> = new Set<string>();
        for(const char of word){
            if(characters.has(char))
                return false;
            characters.add(char);
        }
        return true;
    }

    // Given two arrays of integers and a target, find all pairs that add up to the target such that one is from array1 and the second is from array2. 
    findPairs(array1:number[],array2:number[],target:number):number[][]{
        const numberSet: Set<number> = new Set<number>(array1);
        const resultPairs: number[][] = [];
        for(let i = 0; i<array2.length;i++){
            const compliment = target - array2[i];
            if(numberSet.has(compliment)){
                const pair = [compliment,array2[i]]
                resultPairs.push(pair)
            }
        }

        return resultPairs;
    }

    // Given an unsorted array of integers write a function that finds the length of the longest consecutive sequence of intergers in which
    // each element is one greater than the previous element.

    longestConsecutiveSequence(array1:number[]):number{
        let currentStreak:number = 1;
        let longestStreak:number = 0;
        let sortedArray:number[] = array1.sort((a,b)=>a-b);

        for(let i = 0; i<sortedArray.length; i++){
            if(i < sortedArray.length && sortedArray[i]+1  == sortedArray[i+1])
                currentStreak++;
            else
                currentStreak = 1;

            longestStreak = Math.max(currentStreak,longestStreak)
        }
        return longestStreak;
    }
}
