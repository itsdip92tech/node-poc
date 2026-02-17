import { Controller,Get,Query, Post, Body } from '@nestjs/common';
import { LinkedListService } from './linked-list.service';
import { LinkedList, Node } from './linkedList';
import { QueryDTO } from './linked-list.dto';

@Controller('linked-list')
export class LinkedListController {
  constructor(private readonly linkedListService: LinkedListService) {}

  @Get('prepend')
  prepend(@Query('value') value:number):LinkedList<number>{
    return this.linkedListService.prependNode(value);
  }

  @Get('append')
  append(@Query('value') value:number):LinkedList<number>{
    return this.linkedListService.appendNode(value);
  }

  @Get('insert')
  insert(@Query() param:QueryDTO):LinkedList<number>{
    return this.linkedListService.insertNode(param.index,param.value);
  }

  @Get('removeFirst')
  removeFirst():LinkedList<number> | null{
    return this.linkedListService.removeFirstNode();
  }

  @Get('removeLast')
  removeLast():LinkedList<number> | null{
    return this.linkedListService.removeLastNode();
  }

  @Get('remove')
  remove(@Query('index') index:number):LinkedList<number> | null{
    return this.linkedListService.removeNode(index);
  }

  @Get('get')
  get(@Query('index') index:number):Node<number> | null{
    return this.linkedListService.getNode(index);
  }

  @Get('set')
  set(@Query() param:QueryDTO):LinkedList<number>{
    return this.linkedListService.setNode(param.index,param.value);
  }

  @Get('reverse')
  reverse():LinkedList<number> | null{
    return this.linkedListService.reverse();
  }

  @Get('deleteList')
  delete():LinkedList<number> | null{
    return this.linkedListService.deleteList();
  }

  // Interview questions
  @Get('findMiddle')
  findMiddle(): Node<number> | null{
    return this.linkedListService.findMiddleNode();
  }
}
