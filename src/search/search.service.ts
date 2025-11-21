import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

interface searchIndex<T> {
  original: T;
  searchable: string;
}

@Injectable()
export class SearchService {
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
  search(fileName: string, query: string): Array<Record<string, unknown>> {
    const jsonArray = this.readJsonFile(fileName);
    const indexedArray = this.buildSearchIndex(jsonArray);
    const q = query.toLowerCase();

    return indexedArray
      .filter((record) => record.searchable.includes(q))
      .map((record) => record.original);
  }
}
