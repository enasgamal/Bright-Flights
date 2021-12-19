import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  url: string = "assets/data/flights.json";
  flightsUrl: string = "http://localhost:3000/flights";

  constructor(private http: HttpClient) { }

  getFlights() {
    return this.http.get(this.flightsUrl);
  }
  getFlightById(id:any) {
    return this.http.get(this.flightsUrl+'/'+ id) ;
  }
  filterBySourceAndDestination(sourceSearchWord :any, destinationSearchWord :any) {
    return this.http.get(this.flightsUrl+'?source='+ sourceSearchWord +'&&destination='+ destinationSearchWord ) ;
  }

}
