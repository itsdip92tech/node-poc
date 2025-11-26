import { Module } from '@nestjs/common';
import { HashMapController } from './hash-map.controller';
import { HashMapService } from './hash-map.service';

@Module({
  controllers: [HashMapController],
  providers: [HashMapService]
})
export class HashMapModule {}
