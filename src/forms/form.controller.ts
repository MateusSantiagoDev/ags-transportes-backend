import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateFormDto } from "./dto/create-form.dto";
import { Form } from "./entities/entity";
import { FormService } from "./form.service";

@ApiTags("Formulário")
@Controller("/form")
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  @ApiOperation({
    summary: "Cadastrar um novo cliente"
  })
  create(@Body() dto: CreateFormDto): Promise<Form> {
    return this.formService.create(dto)
  }

  @Get()
  @ApiOperation({
    summary: "Buscar todos os clientes"
  })
  findAll(): Promise<Form[]> {
    return this.formService.findAll()
  }
}
