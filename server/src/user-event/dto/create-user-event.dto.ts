import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserEventDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  eventId: number;
}
