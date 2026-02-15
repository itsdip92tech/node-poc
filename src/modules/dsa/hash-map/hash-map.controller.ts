import { Controller, Get, Query } from '@nestjs/common';
import { HashMapService } from './hash-map.service';
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
}
