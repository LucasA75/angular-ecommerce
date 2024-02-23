import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiTags } from '@nestjs/swagger';
import { ParseObjectIdPipe } from 'src/util/parse-object-id-pipe.pipe';
import { Request } from 'express';
import { ClientsService } from 'src/clients/clients.service';

@ApiTags('order')
@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private clientService: ClientsService,
  ) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    const user = await this.clientService.findOne(
      String(createOrderDto.client),
    );
    if (user == null) {
      throw new BadRequestException('user not exits');
    }
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.ordersService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.ordersService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    const orderUpdated = await this.ordersService.update(id, updateOrderDto);
    if (orderUpdated == null) {
      throw new NotFoundException('order not found');
    }
    return;
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.ordersService.remove(id);
  }
}
