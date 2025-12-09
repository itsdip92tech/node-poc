import { Injectable } from '@nestjs/common';

@Injectable()
export class StringService {
    validatePalindrome(param:string):boolean{
        let isPalindrome = true;
        let left = 0;
        let right = param.length - 1
        while(left<right){
            if(param[left] !== param[right]) return isPalindrome = false;
            left++;
            right--;
        }
        return isPalindrome;
    }
}
