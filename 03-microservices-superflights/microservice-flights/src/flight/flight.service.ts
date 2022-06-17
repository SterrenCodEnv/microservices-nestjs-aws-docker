import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FLIGHT } from '../common/models/models';
import { Model } from 'mongoose';
import { IFlight } from '../common/interfaces/flight.interface';
import { FlightDTO } from './dto/flight.dto';
import { ILocation } from '../common/interfaces/location.interface';
import { IWeather } from '../common/interfaces/weather.interface';
import { UtilsService } from '../common/utils/utils.service';

@Injectable()
export class FlightService {
    constructor(@InjectModel(FLIGHT.name) private readonly model: Model<IFlight>, private readonly utilsService: UtilsService) { }

    private assign(
        { _id, pilot, airplane, destinationCity, flightDate, passengers }: IFlight, weather: IWeather): IFlight {
        return Object.assign({ _id, pilot, airplane, destinationCity, flightDate, passengers, weather });
    }

    async create(flight: FlightDTO): Promise<IFlight> {
        const newFlight = new this.model(flight);
        return await newFlight.save();
    }

    async findAll(): Promise<IFlight[]> {
        return await this.model.find().populate('passengers');
    }

    async findOne(id: string): Promise<IFlight> {
        const flight = await this.model.findById(id).populate('passengers');
        const { lat, lon }: ILocation = await this.utilsService.getLocationByZipCode(flight.destinationCity);
        const weather: IWeather = await this.utilsService.getWeatherByCoordinates(lat, lon);
        return this.assign(flight, weather);
    }

    async update(id: string, flightDTO: FlightDTO): Promise<IFlight> {
        return await this.model.findByIdAndUpdate(id, flightDTO, { new: true });
    }

    async delete(id: string) {
        await this.model.findByIdAndRemove(id);
        return { status: HttpStatus.OK };
    }

    async addPassenger(flightId: string, passengerId: string): Promise<IFlight> {
        return await this.model.findByIdAndUpdate(flightId, { $addToSet: { passengers: passengerId } }, { new: true }).populate('passengers');
    }
}
