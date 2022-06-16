import { HttpStatus, Injectable } from '@nestjs/common';
import { PassengerDTO } from './dto/passenger.dto';
import { IPassenger } from '../common/interfaces/passenger.interface';
import { InjectModel } from '@nestjs/mongoose';
import { PASSENGER } from '../common/models/models';
import { Model } from 'mongoose';

@Injectable()
export class PassengerService {

    constructor(@InjectModel(PASSENGER.name) private readonly model: Model<IPassenger>) { }

    async create(passengerDTO: PassengerDTO): Promise<IPassenger> {
        const passenger = new this.model(passengerDTO);
        return await passenger.save();
    }

    async findAll(): Promise<IPassenger[]> {
        return await this.model.find();
    }

    async findOne(id: string): Promise<IPassenger> {
        return await this.model.findById(id);
    }

    async update(id: string, passengerDTO: PassengerDTO): Promise<IPassenger> {
        return await this.model.findByIdAndUpdate(id, passengerDTO, { new: true });
    }

    async delete(id: string) {
        await this.model.findByIdAndRemove(id);
        return { status: HttpStatus.OK };
    }
}