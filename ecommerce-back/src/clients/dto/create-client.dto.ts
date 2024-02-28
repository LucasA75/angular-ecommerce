import { ApiProperty } from '@nestjs/swagger';
import { Password } from '../classes/Password';

export class CreateClientDto {

  @ApiProperty({ example: 'John Doe' })
  readonly name: string;

  @ApiProperty({ example: 'johndoe@gmail.com' })
  readonly email: string;

  @ApiProperty({ example: 'Password123' })
  readonly password: string;


  constructor(name: string, email: string, password:Password){
    this.name = name
    this.email = email
    this.password = password.value
  }
}