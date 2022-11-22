import { Injectable } from "@nestjs/common";
import { CreateFormDto } from "./dto/create-form.dto";
import { Form } from "./entities/entity";

@Injectable()
export class FormService {

  create(dto: CreateFormDto): Promise<Form>{
    const data: Form = { ...dto }
    return "retornooooo"
  }
}
