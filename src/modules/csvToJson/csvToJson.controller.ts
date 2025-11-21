import { Controller, Get, Query } from '@nestjs/common';
import { CsvToJsonService } from './csvToJson.service';
@Controller('csv')
export class CsvToJsonController {
  constructor(private readonly csvtoJsonService: CsvToJsonService) {}

  @Get('toJson')
  convertCsv(@Query('fileName') fileName: string) {
    this.csvtoJsonService.convertCSV(fileName);
    return 'The CSV file has been converted to Json';
  }
}
