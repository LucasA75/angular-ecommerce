import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './schema/order.shema';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    return this.orderModel.create(createOrderDto);
  }

  async findAll(request: Request) {
    return this.orderModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateOrderDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
