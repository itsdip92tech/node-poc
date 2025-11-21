import { Injectable } from '@nestjs/common';
import csvToJson from 'convert-csv-to-json';

@Injectable()
export class CsvToJsonService {
  convertCSV(fileName: string): void {
    const fileInputName = `./data/input/${fileName}.csv`;
    const fileOutputName = `./data/output/${fileName}.json`;
    csvToJson
      .fieldDelimiter(',')
      .generateJsonFileFromCsv(fileInputName, fileOutputName);
  }
}
