import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messageServices: MessagesService) {}

  @Get()
  listMessages() {
    return this.messageServices.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageServices.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageServices.findOne(id);
    if (!message) {
      return new NotFoundException('Message not found');
    }
    return message;
  }
}
