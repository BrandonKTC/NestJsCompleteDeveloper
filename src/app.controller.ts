import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
	@Get()
	getRootRoot() {
		return "Hello World!";
	}

	@Get("bye")
	bye() {
		return "Goodbye World!";
	}
}
