import { Module } from '@nestjs/common';
import { LinkedListService } from './linked-list.service';
import { LinkedListController } from './linked-list.controller';;
import { LinkedList } from './linkedList';
import { LinkedListProblems } from './linkedListProblems';

@Module({
  controllers: [LinkedListController],
  providers: [LinkedListService, LinkedList, LinkedListProblems],
})
export class LinkedListModule {}
