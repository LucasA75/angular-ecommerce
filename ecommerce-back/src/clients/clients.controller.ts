import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { Password } from './classes/Password';

@Controller('clients')
@ApiTags('client')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    const hashPass =  new Password(createClientDto.password)
    const clientCreate = new CreateClientDto(createClientDto.name,createClientDto.email,hashPass)
    return await this.clientsService.create(clientCreate);
  }

  @Get()
  findAll(@Req() request :Request) { 
    return this.clientsService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(id);
  }
}
