import { ApiProperty } from '@nestjs/swagger';
import { Cart } from 'src/cart/schemas/cart.schemas';
import { Client } from 'src/clients/schemas/client.schema';

export class CreateOrderDto {
  @ApiProperty({ example: '65ce2bc88fa8494b5f9c5149' })
  client: Client;

  @ApiProperty({ example: 20000 })
  totalPrice: number;

  @ApiProperty({ example: 'Los nogales 3118' })
  shippingAdress: string;

  @ApiProperty({ example: 'inProgress' })
  status: string;

  @ApiProperty({ example: '2024-02-21 12:43:30' })
  date: Date;

  @ApiProperty({ example: '65ce2bc88fa8494b5f9c5149' })
  products: Cart;
}
