import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { MessagesModule } from "./messages/messages.module";

async function bootstrap() {
	const app = await NestFactory.create(MessagesModule);
	app.useGlobalPipes(new ValidationPipe()); // Validate every incoming request
	await app.listen(3000);
}
bootstrap();
