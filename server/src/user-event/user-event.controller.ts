import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateNotificationDto } from 'src/notification/dto/create-notification.dto';
import { IsAuthGuard } from './../is-auth.guard';
import { AuthRequest } from './../types/AuthRequest';
import { CreateUserEventDto } from './dto/create-user-event.dto';
import { UserEventService } from './user-event.service';

@Controller('user-event')
@ApiTags('User Event Registration')
export class UserEventController {
  constructor(private readonly userEventService: UserEventService) {}

  @ApiBearerAuth()
  @UseGuards(IsAuthGuard)
  @Post()
  create(
    @Body() createUserEventDto: CreateUserEventDto,
    @Req() req: AuthRequest,
  ) {
    var ctdo = new CreateNotificationDto()    
    return this.userEventService.create(createUserEventDto,ctdo, req.user);
  }

  @Get('/event/:id')
  findByEventId(@Param('id') id: string) {
    return this.userEventService.findAllByEventId(+id);
  }

  @Get('/user/:id')
  findOne(@Param('id') id: string) {
    return this.userEventService.findAllByUserId(+id);
  }

  @ApiBearerAuth()
  @UseGuards(IsAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: AuthRequest) {
    return this.userEventService.remove(+id, req.user);
  }
}
