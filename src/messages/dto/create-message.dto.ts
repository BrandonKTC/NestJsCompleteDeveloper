import { IsString, IsNotEmpty } from "class-validator";

export class CreateMessageDto {
	// carry data between two places
	@IsString()
	@IsNotEmpty()
	content: string;
}
