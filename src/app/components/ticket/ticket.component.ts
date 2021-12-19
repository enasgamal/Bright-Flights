import { Component, OnInit } from '@angular/core';
import { faBarcode, faCalendarAlt, faClock, faDollarSign, faHourglassEnd, faHourglassStart, faPlane, faPlaneArrival, faPlaneDeparture, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s')
      ]),
    ]),
  ]
})
export class TicketComponent implements OnInit {

  faPlane = faPlane;
  faPlaneDeparture = faPlaneDeparture;
  faPlaneArrival = faPlaneArrival;
  faCalendarAlt = faCalendarAlt;
  faClock = faClock;
  faUserAlt = faUserAlt;
  faDollarSign = faDollarSign;
  faHourglassStart = faHourglassStart
  faHourglassEnd = faHourglassEnd
  faBarcode = faBarcode

  textDir: string = 'rtl';
  ticketData: any;
  userData: any;
  noOfTickets: any;

  constructor() { }

  ngOnInit() {

    this.ticketData = localStorage.getItem('ticketData');
    this.userData = localStorage.getItem('userData');

    let decodedFlight = window.decodeURIComponent(escape(window.atob(this.ticketData)));
    let decodedUser = window.decodeURIComponent(escape(window.atob(this.userData)));

    this.ticketData = JSON.parse(decodedFlight);
    this.userData = JSON.parse(decodedUser);

    this.noOfTickets = this.userData.noTickets;
  }
}
