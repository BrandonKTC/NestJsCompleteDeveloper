import {
	Body,
	Controller,
	Get,
	NotFoundException,
	Param,
	Post,
} from "@nestjs/common";
import { CreateMessageDto } from "./dto/create-message.dto";
import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessagesController {
	constructor(public messagesService: MessagesService) {}

	@Get()
	listmessages() {
		return this.messagesService.findAll();
	}

	@Get(":id")
	async getMessages(@Param("id") id: string) {
		const message = await this.messagesService.findOne(id);
		if (!message) {
			throw new NotFoundException("message not found");
		}
		return message;
	}

	@Post()
	createMessages(@Body() createMessageDto: CreateMessageDto) {
		return this.messagesService.create(createMessageDto.content);
	}
}
