import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, HttpStatus, UseGuards } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightDTO } from './dto/flight.dto';
import { PassengerService } from 'src/passenger/passenger.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Flight')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/v1/flight')
export class FlightController {
    constructor(
        private readonly flightService: FlightService,
        private readonly passengerService: PassengerService
    ) { }

    @Post()
    @ApiOperation({ summary: 'Create flight' })
    async createFlight(@Body() flightDTO: FlightDTO): Promise<FlightDTO> {
        return await this.flightService.create(flightDTO);
    }

    @Get()
    @ApiOperation({ summary: 'Find all flights' })
    async findAll(): Promise<FlightDTO[]> {
        return await this.flightService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Find flight by id' })
    async findOne(@Param('id') id: string): Promise<FlightDTO> {
        return await this.flightService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update flight' })
    async update(@Param('id') id: string, @Body() flightDTO: FlightDTO): Promise<FlightDTO> {
        return await this.flightService.update(id, flightDTO);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete flight' })
    async delete(@Param('id') id: string) {
        return await this.flightService.delete(id);
    }

    @Post(':fligthId/passenger/:passengerId')
    @ApiOperation({ summary: 'Add passenger to flight' })
    async addPassenger(@Param('fligthId') fligthId: string, @Param('passengerId') passengerId: string) {
        const passenger = await this.passengerService.findOne(passengerId);
        const response = passenger ? await this.flightService.addPassenger(fligthId, passengerId)
            : new HttpException('Passenger not found', HttpStatus.NOT_FOUND);
        return response;
    }
}
