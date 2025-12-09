import { Module } from '@nestjs/common';
import { ArrayService } from './array.service';
import { ArrayController } from './array.controller';
import { StringService } from './string/string.service';

@Module({
  providers: [ArrayService, StringService],
  controllers: [ArrayController]
})
export class ArrayModule {}
