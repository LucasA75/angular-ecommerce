import { ApiProperty } from '@nestjs/swagger';
import { Order } from 'src/orders/schema/order.shema';
import { Product } from 'src/products/schemas/product.schema';

export class CreateOrderDetailDto {
  @ApiProperty({ example: '65ce2bc88fa8494b5f9c5149' })
  order: Order;

  @ApiProperty({ example: 20000 })
  price: number;

  @ApiProperty({ example: 2 })
  quantity: number;

  @ApiProperty({ example: '65ce2bc88fa8494b5f9c5149' })
  product: Product;
}
