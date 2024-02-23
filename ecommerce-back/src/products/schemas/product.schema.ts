import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  sku: string;

  @Prop()
  price: number;

  @Prop()
  rating: number;

  @Prop()
  category: string;

  @Prop()
  description: string;

  @Prop()
  brand: string;

  @Prop()
  stock: number;

  @Prop([String])
  images: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
