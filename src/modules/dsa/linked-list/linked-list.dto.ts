import { IsOptional, IsInt, IsString, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryDTO {

  @Type(() => Number)
  @IsInt()
  index: number;

  @Type(() => Number)
  @IsInt()
  value: number;

}