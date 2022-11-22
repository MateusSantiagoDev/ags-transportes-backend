import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './forms/form.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FormModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
