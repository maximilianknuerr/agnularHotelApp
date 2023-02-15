import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Booking} from "./booking";


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const bookings: Booking[] = [
      {
        id: 1,
        name: "Maximilian",
        roomNumber: 100,
        startDate: new Date(),
        endDate: new Date("2023-02-20")
      },
      {
        id: 2,
        name: "Jonas",
        roomNumber: 101,
        startDate: new Date(),
        endDate: new Date("2023-02-15")
      },
      {
        id: 3,
        name: "Anna",
        roomNumber: 102,
        startDate: new Date("2023-02-15"),
        endDate: new Date("2023-03-20")
      },
      {
        id: 4,
        name: "Bruno",
        roomNumber: 103,
        startDate: new Date(),
        endDate: new Date("2023-03-15")
      }
    ]

    return {bookings}
  }

  constructor() { }
}
