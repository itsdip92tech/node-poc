import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  searchData(
    @Query('fileName') fileName: string,
    @Query('query') query: string,
  ) {
    return this.searchService.search(fileName, query);
  }
}
