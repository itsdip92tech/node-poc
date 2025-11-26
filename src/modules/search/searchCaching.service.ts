import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import * as cacheManager from 'cache-manager';
@Injectable()
export class SearchCachingService {
  constructor(@Inject(CACHE_MANAGER) private cache: cacheManager.Cache) {}

  //   Increment count of keyword in cache
  async incrementKeyword(keyword: string) {
    const key = `search:count:${keyword}`;
    const current = (await this.cache.get<number>(key)) ?? 0;
    const updated = current + 1;

    // update count in cache
    await this.cache.set(key, updated, 60 * 60 * 24 * 30);

    return updated;
  }

  //   Get count of a keyword saved in cached
  async getCount(keyword: string) {
    return (await this.cache.get<number>(`search:count:${keyword}`)) ?? 0;
  }

  //   Get all cached key value pairs
  getStore(keyword: string) {
    return this.cache.get(`search:result:${keyword}`);
  }

  // Get the cached results for matching keywords which have been searched for more than 5 times
  async getCachedResult(keyword: string) {
    return this.cache.get<string>(`search:result:${keyword}`);
  }

  //  Store the search results for the keywords which are searched more than 5 times
  async setCachedResult(
    keyword: string,
    result: Array<Record<string, unknown>>,
  ) {
    return this.cache.set(
      `search:result:${keyword}`,
      result,
      60 * 60 * 24 * 30,
    );
  }
}
