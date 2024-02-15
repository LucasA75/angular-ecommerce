import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ClientsModule } from './clients/clients.module';
import { OrdersModule } from './orders/orders.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CartModule } from './cart/cart.module';

require('dotenv').config({ path: __dirname+'/.env' });

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URI),
    ProductsModule,
     ClientsModule,
      OrdersModule,
      CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
