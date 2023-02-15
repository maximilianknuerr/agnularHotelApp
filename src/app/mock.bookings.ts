import {Booking} from "./booking";

export const Bookings: Booking[] = [
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