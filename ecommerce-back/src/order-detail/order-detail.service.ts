import { Injectable } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { InjectModel } from '@nestjs/mongoose';
import { OrderDetail, OrderDetailDocument } from './schema/order-detail.shema';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class OrderDetailService {
  constructor(
    @InjectModel(OrderDetail.name)
    private readonly orderDetailModel: Model<OrderDetailDocument>,
  ) {}

  async create(createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailModel.create(createOrderDetailDto);
  }

  async findAll(request: Request) {
    return this.orderDetailModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(id: string) {
    return this.orderDetailModel.findById(id).exec();
  }

  async update(id: string, updateOrderDetailDto: UpdateOrderDetailDto) {
    return this.orderDetailModel
      .findByIdAndUpdate(id, updateOrderDetailDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderDetailModel.findByIdAndDelete(id).exec();
  }
}
