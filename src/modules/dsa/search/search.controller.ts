import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchCachingService } from './searchCaching.service';

@Controller('search')
export class SearchController {
  constructor(
    private readonly searchService: SearchService,
    private readonly searchCachingService: SearchCachingService,
  ) {}

  @Get('tableData')
  searchData(
    @Query('fileName') fileName: string,
    @Query('query') query: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.searchService.search(fileName, query, page, limit);
  }

  @Get('cache-key')
  cacheKey(@Query('key') key: string, @Query('type') type: string) {
    if (type == 'count') {
      return this.searchCachingService.getCount(key);
    } else {
      return this.searchCachingService.getStore(key);
    }
  }
}
