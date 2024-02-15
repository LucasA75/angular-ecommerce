import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
  @ApiProperty({ 
    example: 'Choco latte',
  })
  readonly name: string; 

  @ApiProperty({ example: '1234566789' })
  readonly sku: string;

  @ApiProperty({
    example:
      'its the best latte of the world',
  })
  readonly description: string;

  @ApiProperty({ example: 2120 })
  readonly price: number;

  @ApiProperty({ example: 4.5 })
  readonly rating: number;

  @ApiProperty({ example: "Brand Choco" })
  readonly brand: string;

  @ApiProperty({ example: 44 })
  readonly stock: number;

  @ApiProperty({ example: ['https://m.media-amazon.com/images/I/41fveBeDWmL._SY346_.jpg', 'https://m.media-amazon.com/images/I/41fveBeDWmL._SY346_.jpg'] }) 
  readonly images: string[];
}