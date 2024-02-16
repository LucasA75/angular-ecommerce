import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose'; 
import { Cart } from 'src/cart/schemas/cart.schemas';
import { Client } from 'src/clients/schemas/client.schema';
import { Product } from 'src/products/schemas/product.schema';

export type OrderDocument = Order & Document; 

@Schema() 
export class Order {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client' })
  client: Client;
    
  @Prop()
  totalPrice: number;

  @Prop()
  shippingAdress: number;

  @Prop()
  date: Date;

  @Prop()
  status: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }) 
  products: Cart;
}

export const OrderSchema = SchemaFactory.createForClass(Order);