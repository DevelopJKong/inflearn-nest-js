import { Controller, Get, Param, Req, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Req() request: Request,
    @Body() body: any,
    @Param() params: any,
  ): string {
    console.log(request);
    return 'Hello world';
    // return this.appService.getHello();
  }
}
