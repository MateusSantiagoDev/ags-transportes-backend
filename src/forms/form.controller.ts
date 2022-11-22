import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateFormDto } from "./dto/create-form.dto";
import { Form } from "./entities/entity";
import { FormService } from "./form.service";

@ApiTags("Formulário")
@Controller()
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  create(@Body() dto: CreateFormDto): Promise<Form> {
    return this.formService.create(dto)
  }
}
