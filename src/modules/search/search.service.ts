import { Injectable } from '@nestjs/common';
import { SearchCachingService } from './searchCaching.service';
import * as fs from 'fs';
import * as path from 'path';

interface searchIndex<T> {
  original: T;
  searchable: string;
}

@Injectable()
export class SearchService {
  constructor(private readonly cachingService: SearchCachingService) {}

  // Read json file
  private readJsonFile(fileName: string): Array<Record<string, unknown>> {
    // Placeholder implementation
    const filePath = path.join(
      process.cwd(),
      'data',
      'output',
      `${fileName}.json`,
    );
    const rawJson = fs.readFileSync(filePath, 'utf-8');
    const parsedJson: unknown = JSON.parse(rawJson);

    if (!Array.isArray(parsedJson)) {
      throw new Error('Expected JSON file to contain an array');
    }

    return parsedJson as Array<Record<string, unknown>>;
  }

  // Builds the search index for the objects
  private buildSearchIndex<T extends object>(data: T[]): searchIndex<T>[] {
    return data.map((obj) => {
      const searchable = Object.values(obj).join('').toLowerCase();
      return { original: obj, searchable };
    });
  }

  // Finds the object with partial or full match of the user input
  async search(
    fileName: string,
    query: string,
    page: number,
    limit: number,
  ): Promise<Record<string, unknown>> {
    const jsonArray = this.readJsonFile(fileName);
    const indexedArray = this.buildSearchIndex(jsonArray);
    const q = query.toLowerCase();
    const start = (page - 1) * limit;
    const end = start + (limit - 1);

    // Search redis cache if query result exists.
    const cached = await this.cachingService.getCachedResult(q);
    if (cached) {
      return {
        total: cached.length,
        page,
        limit,
        results: cached.slice(start, end),
      };
    }

    // Increment search count
    const count = await this.cachingService.incrementKeyword(q);

    const filteredArray = indexedArray
      .filter((record) => record.searchable.includes(q))
      .map((record) => record.original);

    // Cache if keyword searched for more than 5 times
    if (count > 5) {
      await this.cachingService.setCachedResult(q, filteredArray);
    }

    return {
      total: filteredArray.length,
      page,
      limit,
      results: filteredArray.slice(start, end),
    };
  }
}
