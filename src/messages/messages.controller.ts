import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessagesRoot() {
    return 'messages root';
  }

  @Get(':id')
  getMessagesId() {
    return `messages id`;
  }

  @Post()
  postMessages() {
    return `post messages`;
  }
}
