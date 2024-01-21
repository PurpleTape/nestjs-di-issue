import { Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class AppServiceWithDep {
  constructor(private readonly appService: AppService) {}

  log() {
    console.log(<b>{this.appService.getHello()}</b>);
  }
}
