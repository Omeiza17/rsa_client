import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Reservation, ReservationRequest, Room} from './model';
import {ReservationService} from './reservation.service';

@Component({
  selector: 'rsa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private reservationService: ReservationService) {
  }

  rooms: Room[];
  roomSearchForm: FormGroup;
  currentCheckInVal: string;
  currentCheckOutVal: string;
  currentPrice: number;
  currentRoomNumber: number;

  currentReservations: Reservation[];

  ngOnInit() {

    this.roomSearchForm = new FormGroup(
      {
        checkin: new FormControl(''),
        checkout: new FormControl(''),
        roomNumber: new FormControl('')
      }
    );

    this.roomSearchForm.valueChanges.subscribe(form => {
      this.currentCheckInVal = form.checkin;
      this.currentCheckOutVal = form.checkout;
      const roomValues: string[] = form.roomNumber.split('|');
      this.currentRoomNumber = Number(roomValues[0]);
      this.currentPrice = Number(roomValues[1]);
    });

    this.rooms = [
      new Room('120', '120', '150'),
      new Room('125', '125', '200'),
      new Room('100', '100', '175'),
    ];

    this.getCurrentReservations();
  }

  createReservation() {
    const reservation = new ReservationRequest(this.currentRoomNumber, this.currentCheckInVal, this.currentCheckOutVal, this.currentPrice);
    this.reservationService.createReservation(reservation)
      .subscribe(postResult => console.log(postResult));
    this.getCurrentReservations();
  }

  getCurrentReservations() {
    this.reservationService.getReservations().subscribe(getResult => {
      console.log(getResult);
      this.currentReservations = getResult;
    });
  }
}
