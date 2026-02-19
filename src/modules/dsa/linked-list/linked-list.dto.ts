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


export class ReverseBetweenDTO {

  @Type(() => Number)
  @IsInt()
  m: number;

  @Type(() => Number)
  @IsInt()
  n: number;

}