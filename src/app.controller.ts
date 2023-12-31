import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('/hello')
  getHello(@Req() request: Request): string {
    return this.appService.getHello(request['user']?.email);
  }

  @Get('/token')
  getToken() {
    return this.appService.getToken();
  }

  @Get('/customers')
  getCustomers() {
    return this.appService.getCustomers();
  }
}
