import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppServiceNoDep } from './app.service-no-dep';
import { AppServiceWithDep } from './app.service-with-dep';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    AppServiceNoDep,
    // Uncomment this:
    // AppServiceWithDep,
  ],
})
export class AppModule {}
