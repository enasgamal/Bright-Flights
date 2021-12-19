import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filterForm!: FormGroup;
  flights: any[] = [];
  filteredFlights: any[] = [];
  sources: any[] = [];
  destinations: any[] = [];
 
  constructor(public fb: FormBuilder, private flightService: FlightService) { }

  ngOnInit(): void {

    this.filterForm = this.fb.group({
      srcName: ['', [Validators.required]],
      destName: ['', [Validators.required]],
    });

    this.flightService.getFlights().subscribe(flights => {
      this.flights.push(flights);
      this.getArraysOfSrcsAndDests();
      this.removeDublicatedArrays();
    })
  }
  getArraysOfSrcsAndDests() {
    for (let i = 0; i < this.flights[0].length; i++) {
      this.sources.push(this.flights[0][i].source);                     //get array of sources
      this.destinations.push(this.flights[0][i].destination);           //get array of destinations
    }
  }
  removeDublicatedArrays() {
    this.sources = this.sources.filter((el: any, i: any, a: any) =>
      i === a.indexOf(el));                                               //remove dublicate from sources array
    this.destinations = this.destinations.filter((el: any, i: any, a: any) =>
      i === a.indexOf(el));                                               //remove dublicate from destinatios array
  }

  searchHandler(emmitedData: any) {
    this.filteredFlights = [];
    this.flightService.filterBySourceAndDestination(emmitedData.src, emmitedData.dest).subscribe(filteredFlights => {
      this.filteredFlights.push(filteredFlights);
     
    })
  }
  getAllTripsData(){
    this.filteredFlights=[]
    this.filteredFlights.push(this.flights[0]);
  }
  
}
