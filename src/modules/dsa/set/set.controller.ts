import { Controller, Get,Post, Body, Query } from '@nestjs/common';
import { SetService } from './set.service';
import { FindPairs } from './set.dto';

@Controller('set')
export class SetController {
  constructor(private readonly setService: SetService) {}

  @Get('hasUniqueCharacters')
  hasUniqueCharacters(@Query('str') str: string): boolean{
    return this.setService.hasUniqueCharacters(str);
  }

  @Post('findPairs')
  findPairs(@Body() param: FindPairs): number[][]{
    return this.setService.findPairs(param.array1,param.array2,param.target);
  }

  @Post('longestConsecutiveSequence')
  longestConsecutiveSequence(@Body('array1') array1: number[]): number{
    return this.setService.longestConsecutiveSequence(array1);
  }

}
