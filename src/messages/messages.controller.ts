import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateMessageDto } from "./dto/create-message.dto";

@Controller("messages")
export class MessagesController {
	@Get()
	getMessagesRoot() {
		return "messages root";
	}

	@Get(":id")
	getMessagesId(@Param("id") id: string) {
		console.log(id);
		return `messages id`;
	}

	@Post()
	postMessages(@Body() createMessageDto: CreateMessageDto) {
		console.log(createMessageDto);
		return `post messages`;
	}
}
