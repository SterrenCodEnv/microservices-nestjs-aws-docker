import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { UserDto } from '../user/dto/user.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) { }
    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findByEmail(email);
        const isValidPassword = await this.userService.checkPassword(
            password,
            user.password,
        );
        if (user && isValidPassword) return user;
        return null;
    }

    async signIn(user: any) {
        const payload = {
            email: user.email,
            sub: user._id,
        };
        return { access_token: this.jwtService.sign(payload) };
    }

    async signUp(userDTO: UserDto) {
        return this.userService.create(userDTO);
    }
}

