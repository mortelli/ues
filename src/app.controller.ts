import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/uppercase')
  toUpperCase(@Body() body) {
    const input = body.text;
    return this.appService.toUpperCase(input);
  }

  @Post('/shuffle')
  shuffle(@Body() body) {
    return this.appService.shuffle(body.list);
  }

  @Post('/reverse')
  reverse(@Body() body) {
    return this.appService.reverse(body.list);
  }
}
