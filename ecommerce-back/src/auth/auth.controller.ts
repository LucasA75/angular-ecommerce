import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { SendAuthDto } from './dto/send-auth.dto';
import { AuthGuard } from './auth.guard';
import { RequestBodyObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SendAuthDto) {
    return this.authService.signIn(signInDto.id, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}
