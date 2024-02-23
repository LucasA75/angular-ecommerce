import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  NotFoundException,
} from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { Request } from 'express';
import { ParseObjectIdPipe } from 'src/util/parse-object-id-pipe.pipe';
import { ApiTags } from '@nestjs/swagger';
import { OrdersService } from 'src/orders/orders.service';
import { ClientsService } from 'src/clients/clients.service';
import { ProductsService } from 'src/products/products.service';

@ApiTags('order-detail')
@Controller('order-detail')
export class OrderDetailController {
  constructor(
    private readonly orderDetailService: OrderDetailService,
    private orderService: OrdersService,
    private productService: ProductsService,
  ) {}

  @Post()
  async create(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    const order = await this.orderService.findOne(
      String(createOrderDetailDto.order),
    );
    if (order == null) {
      throw new NotFoundException('order not found');
    }
    const product = await this.productService.findOne(
      String(createOrderDetailDto.product),
    );
    if (product == null) {
      throw new NotFoundException('product not found');
    }
    return this.orderDetailService.create(createOrderDetailDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.orderDetailService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.orderDetailService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateOrderDetailDto: UpdateOrderDetailDto,
  ) {
    return this.orderDetailService.update(id, updateOrderDetailDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: string) {
    return this.orderDetailService.remove(id);
  }
}
