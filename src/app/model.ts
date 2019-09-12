export class Room {
  id: string;
  roomNumber: string;
  price: string;

  constructor(id: string, roomNumber: string, price: string) {
    this.id = id;
    this.roomNumber = roomNumber;
    this.price = price;
  }
}

export class ReservationRequest {
  roomNumber: number;
  checkIn: Date;
  checkOut: Date;
  price: number;

  constructor(roomNumber: number, checkIn: string, checkOut: string, price: number) {
    this.roomNumber = roomNumber;
    this.checkIn = new Date(checkIn);
    this.checkOut = new Date(checkOut);
    this.price = price;
  }
}

export interface Reservation {
  id: string;
  roomNumber: number;
  checkIn: Date;
  checkOut: Date;
  price: number;
}
