import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateFormDto } from "./dto/create-form.dto";
import { Form } from "./entities/entity";

@Injectable()
export class FormService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateFormDto): Promise<Form> {
    const data: Form = { ...dto };
    return this.prisma.form.create({ data }).catch(this.handleError);
  }

  findAll(): Promise<Form[]> {
    return this.prisma.form.findMany()
  }

  handleError(err: Error): undefined {
    const errorLines = err.message?.split("\n"); // combinação para melhorar a vizualização do erro
    const lastErrorLine = errorLines[errorLines.length -1]?.trim(); // complemento com a linha de cima
    throw new UnprocessableEntityException(lastErrorLine || "Algum erro ocorreu ao executar a operação") // vai exibir o erro no swagger
  }
}
