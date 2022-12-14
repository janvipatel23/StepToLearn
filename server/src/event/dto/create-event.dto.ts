/* 
* Author: Jay Kirankumar Patel
* Banner: B00906433
* E-mail: jaykiranpatel@dal.ca
*/
import { ApiProperty } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';
import { IsDateString, IsNotEmpty, IsString, MinDate } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  address: string;

  @IsDateString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  @MinDate(new Date(new Date().setHours(0, 0, 0, 0)))
  @ApiProperty()
  eventDate: Date;
}
