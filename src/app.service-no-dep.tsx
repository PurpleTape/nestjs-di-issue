import { Injectable, type OnModuleInit } from '@nestjs/common';
import * as console from 'console';

@Injectable()
export class AppServiceNoDep implements OnModuleInit {
  log() {
    console.log(<b>JSX</b>);
  }

  onModuleInit() {
    this.log();
  }
}
