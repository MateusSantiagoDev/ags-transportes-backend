import { Module } from "@nestjs/common";
import { formController } from "./form.controller";
import { formService } from "./form.service";

@Module({
  imports: [],
  controllers: [formController],
  providers: [formService],
})
export class FormModule {}
