import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ArrayService } from './array.service';
import { StringService } from './string/string.service';
import type { TwoSum, MaxSubArr, LongestPrefix } from './arrInterfaces';
@Controller('array')
export class ArrayController {
    constructor(private readonly ArrayService: ArrayService, private readonly StringService: StringService){}

    @Post('twoSum')
    findIndex(@Body() param:TwoSum ):number[]{
        return this.ArrayService.twoSum(param);
    }

    @Post('threeSum')
    findTriplets(@Body() param: MaxSubArr): number[][]{
        return this.ArrayService.threeSum(param);
    }

    @Post('maxSubArr')
    findMaxSubArr(@Body() param:MaxSubArr): number{
        return this.ArrayService.maxSubArr(param);
    }

    @Post('longestPrefix')
    findLongestPrefix(@Body() param:LongestPrefix): string{
        return this.ArrayService.longestPrefix(param);
    }

    @Post('maxProfit')
    findMaximumProfit(@Body() param: MaxSubArr): number{
        return this.ArrayService.maxProfit(param);
    }

    @Post('maxJaggedArr')
    findLargestNumJaggedArr(@Body() param: MaxSubArr):number{
        return this.ArrayService.maxValJaggedArr(param.arr)
    }

    @Get('longestSubStr')
    findLongestSubString(@Query('param') param:string):number{
        return this.ArrayService.longestSubstring(param);
    }

    @Get('palindrome')
    checkPalindrome(@Query('param') param:string):boolean{
        return this.StringService.validatePalindrome(param);
    }

    @Get('printFibonacci')
    printFibonacci(@Query('param') param:number):number[]{
        return this.ArrayService.printFibonacci(param);
    }
}
