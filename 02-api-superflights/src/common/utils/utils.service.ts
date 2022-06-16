import { Injectable } from '@nestjs/common';
import { ILocation } from '../interfaces/location.interface';
import { IWeather } from '../interfaces/weather.interface';
import axios from 'axios';

@Injectable()
export class UtilsService {

    private wheaterApiKey = '88350c2e26c917d1b723986d1f1745e7';

    async getLocationByZipCode(zipCode: string): Promise<ILocation> {
        const url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${this.wheaterApiKey}`;
        const response = await axios.get(url);
        return response.data;
    }

    async getWeatherByCoordinates(lat: number, lon: number): Promise<IWeather> {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.wheaterApiKey}`;
        const response = await axios.get(url);
        return response.data;
    }

}
