import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { lastValueFrom, Observable } from 'rxjs';
import { FlightMSG, PassengerMSG } from 'src/common/constants';
import { IFlight } from 'src/common/interfaces/flight.interface';
import { ClientProxySuperFlight } from '../common/proxy/client-proxy';
import { FlightDTO } from './dto/flight.dto';

@ApiTags('Flight')
@Controller('api/v2/flight')
export class FlightController {
    constructor(private readonly clientProxy: ClientProxySuperFlight) { }

    private _clientProxyFlight = this.clientProxy.clientProxyFlight();
    private _clientProxyPassenger = this.clientProxy.clientProxyPassenger();

    @Post()
    create(@Body() flightDTO: FlightDTO): Observable<IFlight> {
        return this._clientProxyFlight.send(FlightMSG.CREATE, flightDTO);
    }

    @Get()
    findAll(): Observable<IFlight[]> {
        return this._clientProxyFlight.send(FlightMSG.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IFlight> {
        return this._clientProxyFlight.send(FlightMSG.FIND_ONE, id);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() flightDTO: FlightDTO,
    ): Observable<IFlight> {
        return this._clientProxyFlight.send(FlightMSG.UPDATE, { id, flightDTO });
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._clientProxyFlight.send(FlightMSG.DELETE, id);
    }

    @Post(':flightId/passenger/:passengerId')
    async addPassenger(
        @Param('flightId') flightId: string,
        @Param('passengerId') passengerId: string,
    ) {
        const passenger = lastValueFrom(await this._clientProxyPassenger
            .send(PassengerMSG.FIND_ONE, passengerId));

        if (!passenger)
            throw new HttpException('Passenger Not Found', HttpStatus.NOT_FOUND);

        return this._clientProxyFlight.send(FlightMSG.ADD_PASSENGER, {
            flightId,
            passengerId
        });
    }
}
