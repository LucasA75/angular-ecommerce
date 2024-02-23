import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart, CartDocument } from './schemas/cart.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model, model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name)
    private readonly cartService: Model<CartDocument>,
  ) {}

  async create(createCartDto: CreateCartDto): Promise<CreateCartDto> {
    return this.cartService.create(createCartDto);
  }

  async findAll(request: Request): Promise<Cart[]> {
    return this.cartService
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  findOne(id: string): Promise<Cart> {
    return this.cartService.findOne({ _id: id }).exec();
  }

  async update(id: string, updateCartDto: UpdateCartDto): Promise<Cart> {
    return await this.cartService.findOneAndUpdate({ _id: id }, updateCartDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.cartService.findByIdAndDelete({ _id: id }).exec();
  }
}
