import { ApiProperty } from '@nestjs/swagger';
import { Client } from 'src/clients/schemas/client.schema';
import { Product } from 'src/products/schemas/product.schema';

export class CreateCartDto {
  @ApiProperty({ example: '65ce2bc88fa8494b5f9c5149' })
  client: Client;

  @ApiProperty({ example: 20000 })
  totalPrice: number;

  @ApiProperty({ example: 2 })
  amount: number;

  @ApiProperty({ example: "inProgress" })
  status: string

  @ApiProperty({
    example: [
      {
        _id: '65cd0c7866a90564d2a0dd45',
        name: 'Choco latte',
        sku: '1234566781',
        price: 2120,
        rating: 4.5,
        description: 'its the best latte of the world',
        brand: 'Brand Choco',
        stock: 44,
        images: [
          'https://m.media-amazon.com/images/I/41fveBeDWmL._SY346_.jpg',
          'https://m.media-amazon.com/images/I/41fveBeDWmL._SY346_.jpg',
        ],
        __v: 0,
      },
      {
        _id: '65cd0d5066a90564d2a0dd47',
        name: 'Mocka',
        sku: '1234566781',
        price: 2020,
        rating: 4.5,
        description: 'its the best mocka of the world',
        brand: 'Brand Choco',
        stock: 44,
        images: [
          'https://m.media-amazon.com/images/I/41fveBeDWmL._SY346_.jpg',
          'https://m.media-amazon.com/images/I/41fveBeDWmL._SY346_.jpg',
        ],
        __v: 0,
      },
    ],
  })
  product: Product[];
}
