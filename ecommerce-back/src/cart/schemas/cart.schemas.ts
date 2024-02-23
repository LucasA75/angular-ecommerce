import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
import { Client } from 'src/clients/schemas/client.schema';
import { Product } from 'src/products/schemas/product.schema';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client' })
  client: Client;

  @Prop()
  totalPrice: number;

  @Prop()
  amount: number;

  @Prop()
  status: string;

  @Prop([Product])
  product: Product[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);
