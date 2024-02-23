import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Order } from 'src/orders/schema/order.shema';

export type OrderDetailDocument = OrderDetail & Document;

export class OrderDetail {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order' })
  order: Order;

  @Prop()
  price: number;

  @Prop()
  quantity: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  product: string;
}

export const OrderDetailSchema = SchemaFactory.createForClass(OrderDetail);
