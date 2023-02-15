import { Injectable } from '@angular/core';
import {Booking} from "./booking";
import {Bookings} from "./mock.bookings";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient:HttpClient) { }

  bookingsUrl: string = "/api/bookings"

  getBookings(): Observable<Booking[]> {

    return this.httpClient.get<Booking[]>(this.bookingsUrl)
  }

  getBookingByID(id: number): Observable<Booking>{
    return this.httpClient.get<Booking>(this.bookingsUrl + "/" + id)
  }

  createBooking(booking: Booking): Observable<Booking> {
    return this.httpClient.post<Booking>(this.bookingsUrl, booking)
  }


  deleteBooking(booking: Booking): Observable<Booking> {
    return this.httpClient.delete<Booking>(this.bookingsUrl + "/" + booking.id)

  }
}
