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


    // Find the last digit of x^y where x and y are very large
    findLastDigit(base:string,exponent:string):number{
        if(base == "" && exponent =="") return 0;

        let baseRoot = parseInt(base.charAt(base.length-1));
        let exponentRoot = parseInt(base.charAt(exponent.length-1));

        let powValue = baseRoot**exponentRoot;
        return powValue %10;

          // Rule 1: Anything to the power of 0 is 1
        // if (expStr === "0") return 1;

        // // Rule 2: 0 to any power (that isn't 0) is 0
        // if (baseStr === "0") return 0;

        // // Get the last digit of the base (0-9)
        // const base = parseInt(baseStr.slice(-1));

        // // Get the last two digits of the exponent to find its value mod 4
        // // (A number mod 4 is determined only by its last two digits)
        // const lastTwo = parseInt(expStr.slice(-2));

        // // Calculate the position in the cycle (1, 2, 3, or 4)
        // let exp = lastTwo % 4;
        // if (exp === 0) exp = 4;

        // // Calculate base^exp and return the last digit
        // // Since exp is at most 4, Math.pow will be perfectly accurate
        // return Math.pow(base, exp) % 10;
    }

}
