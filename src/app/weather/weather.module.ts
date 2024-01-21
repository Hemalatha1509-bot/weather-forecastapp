import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from './weather.service';


@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [WeatherService],
  
})
export class WeatherModule { }
