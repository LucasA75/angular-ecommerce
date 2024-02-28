import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientsService } from 'src/clients/clients.service';

@Injectable()
export class AuthService {

    constructor(private usersService: ClientsService, private jwtTokenService: JwtService){}

    async validateUserCredentials(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);

        if (user && user.password === password) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async loginWithCredentials(user: any) {
        const payload = { username: user.username, sub: user.userId };

        return {
            access_token: this.jwtTokenService.sign(payload),
        };
    }

    async signIn(
        idUser: string,
        pass: string,
      ): Promise<{ access_token: string }> {
        const user = await this.usersService.findOne(idUser);
        console.log(user)
        if (user?.password !== pass) {
          throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.name };
        return {
          access_token: await this.jwtTokenService.signAsync(payload),
        };
      }
}
