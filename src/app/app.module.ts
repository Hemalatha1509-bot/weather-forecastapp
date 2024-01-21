
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


// import { AppRoutingModule } from '/app-routing.module';
import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
// import { WeatherForecastComponent } from './weather/weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, WeatherModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}