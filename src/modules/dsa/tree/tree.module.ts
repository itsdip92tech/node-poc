import { Module } from '@nestjs/common';
import { TreeController } from './tree.controller';
import { TreeService, Dog } from './tree.service';

@Module({
  controllers: [TreeController],
  providers: [TreeService, Dog]
})
export class TreeModule {}
