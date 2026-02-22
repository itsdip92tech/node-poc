import { Controller, Get,Post, Body, Query } from '@nestjs/common';
import { HashMapService } from './hash-map.service';
import { ItemsInCommon, FindDuplicates } from './hash-map.dto';

@Controller('hash-map')
export class HashMapController {
    constructor(private readonly HashMapService: HashMapService){}

    @Get('nonRepeatingChar')
    findNonRepeatingChar(@Query('str') str: string): string{
        return this.HashMapService.nonRepeatingChar(str);
    }

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

    @Get('findNonRepeatingCharacters')
    findNonRepeatingCharacters(@Query('str') str: string):string{
        return this.HashMapService.firstNonRepeatingCharacter(str);
    }
}
