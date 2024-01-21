import { Injectable, type OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class AppServiceWithDep implements OnModuleInit {
  constructor(private readonly appService: AppService) {}

  log() {
    console.log('typeof this.appService:', typeof this.appService);
    console.log(<b>{this.appService.getHello()}</b>);
  }

  onModuleInit() {
    this.log();
  }
}
