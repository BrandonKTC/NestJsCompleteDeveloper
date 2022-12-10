import { CreateMessageDto } from "./dto/create-message.dto";
export declare class MessagesController {
    getMessagesRoot(): string;
    getMessagesId(id: string): string;
    postMessages(createMessageDto: CreateMessageDto): string;
}
