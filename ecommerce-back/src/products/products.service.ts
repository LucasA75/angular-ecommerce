import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productModel.create(createProductDto);
  }

  async findAll(request: Request): Promise<Product[]> {
    return this.productModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productModel.findOneAndUpdate({ _id: id }, updateProductDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.productModel.findByIdAndDelete({ _id: id }).exec();
  }
}
