import { Module } from '@nestjs/common';
import { LinkedListService } from './linked-list.service';
import { LinkedListController } from './linked-list.controller';

@Module({
  controllers: [LinkedListController],
  providers: [LinkedListService],
})
export class LinkedListModule {}
