import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { PassengerMSG } from 'src/common/constants';
import { IPassenger } from 'src/common/interfaces/passenger.interface';
import { ClientProxySuperFlight } from '../common/proxy/client-proxy';
import { PassengerDTO } from './dto/passenger.dto';

@ApiTags('Passenger')
@Controller('api/v2/passenger')
export class PassengerController {
    constructor(private readonly clientProxy: ClientProxySuperFlight) { }
    private _clientProxyPassenger = this.clientProxy.clientProxyPassenger();

    @Post()
    create(@Body() passengerDTO: PassengerDTO): Observable<IPassenger> {
        return this._clientProxyPassenger.send(PassengerMSG.CREATE, passengerDTO);
    }

    @Get()
    findAll(): Observable<IPassenger[]> {
        return this._clientProxyPassenger.send(PassengerMSG.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IPassenger> {
        return this._clientProxyPassenger.send(PassengerMSG.FIND_ONE, id);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() passengerDTO: PassengerDTO,
    ): Observable<IPassenger> {
        return this._clientProxyPassenger.send(PassengerMSG.UPDATE, {
            id,
            passengerDTO,
        });
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._clientProxyPassenger.send(PassengerMSG.DELETE, id);
    }
}
