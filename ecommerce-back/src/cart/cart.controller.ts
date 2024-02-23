import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UsePipes,
  BadRequestException,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { ParseObjectIdPipe } from 'src/util/parse-object-id-pipe.pipe';
import { ZodValidationPipe } from 'src/util/zod-validation-pipe.pipe';
import { createCartSchemaZod } from './dto/create-cart.zod';
import { ClientsService } from 'src/clients/clients.service';

@Controller('cart')
@ApiTags('cart')
export class CartController {
  constructor(
    private readonly cartService: CartService,
    private clientService: ClientsService,
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createCartSchemaZod))
  async create(@Body() createCartDto: CreateCartDto) {
    const user = await this.clientService.findOne(String(createCartDto.client));
    if (user == null) {
      throw new BadRequestException('User not exists');
    }
    return this.cartService.create(createCartDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.cartService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.cartService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateCartDto: UpdateCartDto,
  ) {
    const user = await this.clientService.findOne(String(updateCartDto.client));
    if (user == null) {
      throw new BadRequestException('User not exists');
    }
    return this.cartService.update(id, updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.cartService.remove(id);
  }
}
