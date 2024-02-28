import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client, ClientDocument } from './schemas/client.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name)
    private readonly clientModel: Model<ClientDocument>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    if(await this.uniqueEmail(createClientDto.email)){
      throw new BadRequestException("this email exists")
    }
    return this.clientModel.create(createClientDto);
  }

  async findAll(request: Request): Promise<Client[]> {
    return this.clientModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async uniqueEmail(email: string): Promise<boolean>{ 
    const emailExits = await this.clientModel.findOne({email: email})
    return emailExits ? true : false
  }

  async findOne(id: string): Promise<Client> {
    return this.clientModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    return this.clientModel.findOneAndUpdate({ _id: id }, updateClientDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.clientModel.findByIdAndDelete({ _id: id }).exec();
  }
}
