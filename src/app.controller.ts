import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService
    ) {}

  @Get()
  async getHello() {

    await this.httpService.axiosRef('http://localhost:3000/').then(data => {console.log(data.data)});

    return this.appService.getHello();
  }

  @Get('test')
  someMethod() {
    return {test: true}
  }

}
