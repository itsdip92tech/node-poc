import { Controller, Post, Body } from '@nestjs/common';
import { TreeService } from './tree.service';

@Controller('tree')
export class TreeController {
    constructor(private TreeService: TreeService){}

    @Post('dfs')
    depthFirstSearch(@Body() param: Record<string,any>):number{
        return this.TreeService.depthFirstSearch(param);
    }


}
