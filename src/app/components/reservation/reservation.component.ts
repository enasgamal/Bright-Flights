import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(200%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class ReservationComponent implements OnInit {

  reservationForm!: FormGroup;
  filteredUser: any[] = [];
  currentFlight: any;
  flightId: any

  constructor(public fb: FormBuilder, private route: ActivatedRoute, private flightService: FlightService,
    private router: Router) { }

  ngOnInit(): void {

    this.reservationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      name: ['', [Validators.required]],
      noTickets: ['', [Validators.required, Validators.min(1)]],
    });

    this.flightId = this.route.snapshot.paramMap.get('id');
    this.flightService.getFlightById(this.flightId).subscribe((flight: any) => {
      this.currentFlight = flight;
    })
  }

  get validateEmail() {
    return this.reservationForm.get('email');
  }

  bookAndSendFlightData(formValue: any) {
    let strigfyFlight = JSON.stringify(this.currentFlight);
    let strigfyUser = JSON.stringify(formValue);

    let encodedFlight = btoa(unescape(encodeURIComponent(strigfyFlight)));
    let encodedUser = btoa(unescape(encodeURIComponent(strigfyUser)));

    localStorage.setItem('ticketData', encodedFlight);
    localStorage.setItem('userData', encodedUser);

    this.router.navigate(['/trips/', this.flightId, 'ticket']);
  }
}


