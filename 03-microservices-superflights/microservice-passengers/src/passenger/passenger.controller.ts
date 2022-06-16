import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PassengerDTO } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';

@ApiTags('Passenger')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/v1/passenger')
export class PassengerController {

    constructor(private readonly passengerService: PassengerService) { }

    @Post()
    @ApiOperation({ summary: 'Create passenger' })
    create(@Body() passengerDTO: PassengerDTO) {
        return this.passengerService.create(passengerDTO);
    }

    @Get()
    @ApiOperation({ summary: 'Find all passengers' })
    findAll() {
        return this.passengerService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Find passenger by id' })
    findOne(@Param('id') id: string) {
        return this.passengerService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update passenger' })
    update(@Param('id') id: string, @Body() passengerDTO: PassengerDTO) {
        return this.passengerService.update(id, passengerDTO);
    }

    @ApiOperation({ summary: 'Delete passenger' })
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.passengerService.delete(id);
    }
}
