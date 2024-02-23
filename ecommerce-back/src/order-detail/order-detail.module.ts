import { Module } from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { OrderDetailController } from './order-detail.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderDetail, OrderDetailSchema } from './schema/order-detail.shema';
import { OrdersModule } from 'src/orders/orders.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OrderDetail.name, schema: OrderDetailSchema },
    ]),
    ProductsModule,
    OrdersModule,
  ],
  controllers: [OrderDetailController],
  providers: [OrderDetailService],
})
export class OrderDetailModule {}
