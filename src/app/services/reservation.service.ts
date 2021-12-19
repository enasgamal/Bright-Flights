import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservationUrl: string = "http://localhost:3000/reservations";
  constructor(private http: HttpClient) { }

  getReservations() {
    return this.http.get(this.reservationUrl);
  }
  postReservations(reservation: any) {
    return this.http.post(this.reservationUrl, reservation);
  }
}
