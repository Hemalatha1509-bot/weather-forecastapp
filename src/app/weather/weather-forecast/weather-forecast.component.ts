import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  imports: [],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.css'
})
export class WeatherForecastComponent {
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeatherForecast(this.city).subscribe((data) => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
}
