import { Module } from '@nestjs/common';
import { CsvToJsonService } from './csvToJson.service';
import { CsvToJsonController } from './csvToJson.controller';
@Module({
  imports: [],
  controllers: [CsvToJsonController],
  providers: [CsvToJsonService],
})
export class CsvToJsonModule {}
