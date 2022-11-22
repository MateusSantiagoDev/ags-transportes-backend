import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive, IsString } from "class-validator";

export class CreateFormDto {
  @IsString()
  @ApiProperty({
    description: "A origem da viagem",
    example: "São Paulo",
  })
  origem: string;

  @IsString()
  @ApiProperty({
    description: "O destino da viagem",
    example: "Minas Gerais"
  })
  destino: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: "Data da viagem",
    example: 22/11/2022
  })
  data: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: "Horário da viagem",
    example: 18
  })
  hora: number;

  @IsString()
  @ApiProperty({
    description: "Nome do cliente",
    example: "Jhonata dos santos"
  })
  nome: string;

  @IsString()
  @ApiProperty({
    description: "Nome da empresa que ira contratar nosso serviço",
    example: "AGS Transportes"
  })
  empresa: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: "Número de telefone",
    example: 99999999
  })
  contato: number;

  @IsString()
  @ApiProperty({
    description: "Email do cliente ou empresa",
    example: "exemplo@exemplo.com"
  })
  email: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: "Quantidade de pessoas que iram viajar",
    example: 5
  })
  passageiros: number;

  @IsString()
  @ApiProperty({
    description: "Modelo do veículo quer será alugado",
    example: "toyota hilux"
  })
  veiculo: string;

  @IsString()
  @ApiProperty({
    description: "Alguma informação adicional",
    example: "um dos passageiros tem necessidades especiais"
  })
  informacoes: string;
}
