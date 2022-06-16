import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientProxySuperFlight } from '../common/proxy/client-proxy';
import { Observable } from 'rxjs';
import { IUser } from '../common/interfaces/user.interface';
import { UserMSG } from 'src/common/constants';
import { UserDto } from './dto/user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('api/v2/user')
export class UserController {

    constructor(private readonly clientProxy: ClientProxySuperFlight) { }
    private _clientProxyUser = this.clientProxy.clientProxyUsers();

    @Post()
    createUser(@Body() userDto: UserDto): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.CREATE, userDto);
    }

    @Get()
    findAll(): Observable<IUser[]> {
        return this._clientProxyUser.send(UserMSG.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.FIND_ONE, id);
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() userDto: UserDto): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.UPDATE, { id, userDto });
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.DELETE, id);
    }
}
