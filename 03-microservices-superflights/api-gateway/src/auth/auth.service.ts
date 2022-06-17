import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { lastValueFrom } from 'rxjs';
import { UserMSG } from 'src/common/constants';
import { UserDto } from '../user/dto/user.dto';
import { ClientProxySuperFlight } from './../common/proxy/client-proxy'


@Injectable()
export class AuthService {
    constructor(
        private readonly clientProxy: ClientProxySuperFlight,
        private readonly jwtService: JwtService,
    ) { }

    private _clientProxyUser = this.clientProxy.clientProxyUsers();
    async validateUser(username: string, password: string): Promise<any> {
        const user = lastValueFrom(await this._clientProxyUser.send(UserMSG.VALID_USER, { username, password }));
        if (user) return user;
        return null;
    }

    async signIn(user: any) {
        const payload = {
            username: user.username,
            sub: user._id,
        };

        return { access_token: this.jwtService.sign(payload) };
    }

    async signUp(userDTO: UserDto) {
        return lastValueFrom(await this._clientProxyUser.send(UserMSG.CREATE, userDTO));
    }
}

