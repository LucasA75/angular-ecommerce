import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 

export type ClientDocument = Client & Document; 

@Schema() 
export class Client {

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client); 
