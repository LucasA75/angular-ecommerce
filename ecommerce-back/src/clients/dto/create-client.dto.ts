import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty({ example: 'John Doe' })
  readonly name: string;

  @ApiProperty({ example: 'johndoe@gmail.com' })
  readonly email: string;

  @ApiProperty({ example: 'Password123' })
  readonly password: string;
}
