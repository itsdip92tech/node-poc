import { Controller, Get, Post, Body } from '@nestjs/common';
import { TreeService, Dog } from './tree.service';
import type { BtreePayload } from './treeInterface';

@Controller('tree')
export class TreeController {
    constructor(private TreeService: TreeService, private Dog: Dog){}

    @Post('dfs')
    depthFirstSearch(@Body() param: Record<string,any>):number{
        return this.TreeService.depthFirstSearch(param);
    }

    @Post('btree')
    createBinaryTree(@Body() param: BtreePayload<number>): any{
        return this.TreeService.buildFromArray(param.arr);
    }

    @Get('oops')
    testOOPS():number{
        return this.Dog.speak();
    }


}
