import { Controller, Post, Body } from '@nestjs/common';
import { ArrayService } from './array.service';
import type { TwoSum, MaxSubArr, LongestPrefix } from './arrInterfaces';
@Controller('array')
export class ArrayController {
    constructor(private readonly ArrayService: ArrayService){}

    @Post('twoSum')
    findIndex(@Body() param:TwoSum ):number[]{
        return this.ArrayService.twoSum(param);
    }

    @Post('maxSubArr')
    findMaxSubArr(@Body() param:MaxSubArr): number{
        return this.ArrayService.maxSubArr(param);
    }

    @Post('longestPrefix')
    findLongestPrefix(@Body() param:LongestPrefix): string{
        return this.ArrayService.longestPrefix(param);
    }

}
