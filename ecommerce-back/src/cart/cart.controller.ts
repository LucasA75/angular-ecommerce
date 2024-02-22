import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UsePipes } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { ParseObjectIdPipe } from 'src/util/parse-object-id-pipe.pipe';
import { ZodValidationPipe } from 'src/util/zod-validation-pipe.pipe';
import { createCartSchemaZod } from './dto/create-cart.zod';

@Controller('cart')
@ApiTags('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createCartSchemaZod))
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Get()
  findAll(@Req() request:Request) {
    return this.cartService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id',ParseObjectIdPipe) id: string) {
    return this.cartService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseObjectIdPipe) id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(id, updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseObjectIdPipe) id: string) {
    return this.cartService.remove(id);
  }
}
