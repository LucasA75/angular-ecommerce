import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ClientsModule } from './clients/clients.module';
import { OrdersModule } from './orders/orders.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CartModule } from './cart/cart.module';
import { ConfigModule } from '@nestjs/config';
import { OrderDetailModule } from './order-detail/order-detail.module';
import configuration from './configuration';

const mongoConecction =
  configuration().database.url + configuration().database.db;

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    MongooseModule.forRoot(mongoConecction),
    ProductsModule,
    ClientsModule,
    OrdersModule,
    CartModule,
    OrderDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}
}
