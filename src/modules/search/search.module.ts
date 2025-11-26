import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { SearchCachingService } from './searchCaching.service';

@Module({
  controllers: [SearchController],
  providers: [SearchService, SearchCachingService],
})
export class SearchModule {}
