import { Component, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

//const headers = new HttpHeaders();
//headers = headers.set('Content-Type', 'application/json; charset=utf-8');
//headers = headers.set('Access-Control-Allow-Origin', '*');
//headers = headers.set('name', 'prashanth');

@Component({
  selector: "app-fetch-data",
  templateUrl: "./fetch-data.component.html",
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  url: string = "https://localhost:5001/weatherforecast";
  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    //baseUrl + 'weatherforecast'
    http.get<WeatherForecast[]>(this.url).subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => console.error(error)
    );
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
