import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart, CartDocument } from './schemas/cart.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name)
    private readonly clientModel: Model<CartDocument>,
  ) {}

  async create(createCartDto:CreateCartDto): Promise<CreateCartDto> {
    return this.clientModel.create(createCartDto);
  }

  async findAll(request: Request): Promise<Cart[]> {
    return this.clientModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  findOne(id: string): Promise<Cart> {
    return this.clientModel.findOne({ _id: id }).exec();
  }

  update(id: string, updateCartDto: UpdateCartDto) {
    return this.clientModel.findOneAndUpdate({ _id: id }, updateCartDto, {
      new: true,
    });
  }

  remove(id: string) {
    return  this.clientModel.findByIdAndDelete({_id:id}).exec();
  }
}
