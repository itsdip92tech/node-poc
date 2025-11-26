import { Module } from '@nestjs/common';
import { ArrayService } from './array.service';
import { ArrayController } from './array.controller';

@Module({
  providers: [ArrayService],
  controllers: [ArrayController]
})
export class ArrayModule {}
