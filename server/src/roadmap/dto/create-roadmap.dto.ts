import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRoadmapDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty({ nullable: true })
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  data: string;

  @IsNumber()
  @IsNotEmpty()
  categoryId: number;
}
