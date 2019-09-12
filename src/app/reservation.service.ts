import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Reservation, ReservationRequest} from './model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'http://localhost:8080';
  private reservationUrl = `${this.baseUrl}/room/v1/reservation/`;

  createReservation(body: ReservationRequest): Observable<Reservation> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };

    return this.http.post<Reservation>(this.reservationUrl, body, httpOptions);
  }

   getReservations(): Observable<Reservation[]> {
     return this.http.get<Reservation[]>(this.reservationUrl);
   }
}
