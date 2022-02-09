import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController { // 의존성 주입 패턴
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('hello/:id/:name')
  // getHello(
  //   @Req() req: Request,
  //   @Body() Body,
  //   @Param() param: { id: string; name: string },
  // ): string {
  //   // console.log(req);
  //   return this.appService.getHello(Body, param);
  // }
}
