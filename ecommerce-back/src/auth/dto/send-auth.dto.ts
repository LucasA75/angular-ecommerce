import { ApiProperty } from '@nestjs/swagger';

export class SendAuthDto {

  @ApiProperty({ example: '65d8e396bdc12318bb1a4e4b' })
  readonly id: string;

  @ApiProperty({ example: '$2b$10$h9OY4dJTkG0sSYr7rqiPH.lFcfG0c12pj99ebJgDqD23YEPUAbc8e' })
  readonly password: string;
}