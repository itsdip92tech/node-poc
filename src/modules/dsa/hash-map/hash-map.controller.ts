import { Controller, Get,Post, Body, Query } from '@nestjs/common';
import { HashMapService } from './hash-map.service';
import { ItemsInCommon, FindDuplicates, ArrayToTarget } from './hash-map.dto';

@Controller('hash-map')
export class HashMapController {
    constructor(private readonly HashMapService: HashMapService){}

    @Get('lenSubString')
    findLenSubString(@Query('str') str: string): number{
        return this.HashMapService.lenSubString(str);
    }

    @Get('validParentheses')
    checkValidParentheses(@Query('str') str: string): boolean{
        console.log(str)
        return this.HashMapService.validParentheses(str);
    }

    @Post('itemsInCommon')
    checkItemsInCommon(@Body() param:ItemsInCommon):boolean{
        return this.HashMapService.itemInCommon(param.array1,param.array2);
    }

    @Post('findDuplicates')
    findDuplicates(@Body() param: FindDuplicates):number[]{
        return this.HashMapService.findDuplicates(param.array1)
    }

    @Post('findIndices')
    findIndices(@Body() param:ArrayToTarget):number[]{
        return this.HashMapService.findIndices(param.array1,param.target);
    }

    @Post('findAllPairs')
    findAllPairs(@Body() param:ArrayToTarget):number[][]{
        return this.HashMapService.findAllPairs(param.array1,param.target);
    }

    @Get('findNonRepeatingCharacters')
    findNonRepeatingCharacters(@Query('str') str: string):string{
        return this.HashMapService.firstNonRepeatingCharacter(str);
    }

    @Post('groupAnagrams')
    checkGroupAnagrams(@Body('param') param: string[]):string[][]{
        return this.HashMapService.groupAnagrams(param);
    }

    @Post('subArraySum1')
    subArraySum1(@Body() param: ArrayToTarget):number[]{
        return this.HashMapService.subArraySum(param.array1, param.target);
    }

    
    @Post('pairsWithDifference')
    pairsWithDifference(@Body() param: ArrayToTarget):number{
        return this.HashMapService.pairsWithDifference(param.array1, param.target);
    }
}
