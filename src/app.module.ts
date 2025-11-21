import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CsvToJsonModule } from './modules/csvToJson/csvToJson.module';
import { SearchModule } from './search/search.module';
@Module({
  imports: [CsvToJsonModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
