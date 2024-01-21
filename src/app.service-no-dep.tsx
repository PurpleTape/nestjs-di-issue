import { Injectable } from '@nestjs/common';

@Injectable()
export class AppServiceNoDep {
  log() {
    console.log(<b>JSX</b>);
  }
}
