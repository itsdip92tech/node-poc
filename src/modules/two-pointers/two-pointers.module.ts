import { Module } from '@nestjs/common';
import { TwoPointersController } from './two-pointers.controller';
import { TwoPointersService } from './two-pointers.service';

@Module({
  controllers: [TwoPointersController],
  providers: [TwoPointersService]
})
export class TwoPointersModule {}
