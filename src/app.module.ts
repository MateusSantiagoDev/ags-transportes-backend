import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './forms/form.module';

@Module({
  imports: [FormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
