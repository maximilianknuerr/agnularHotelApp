import {Component} from '@angular/core';
import {Booking} from "../booking";

import {Router, ActivatedRoute} from "@angular/router";
import {BookingService} from "../booking.service";

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private bookingService: BookingService) {

  }

  booking: Booking = {
    id: 100,
    name: 'name',
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date()
  }

  ngOnInit(): void {
    if (this.router.url != "/create") {
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'))

      this.bookingService.getBookingByID(id).subscribe((result) => {
        this.booking = result
      })
    }

  }

  save(): void {

    this.bookingService.createBooking(this.booking).subscribe()
    this.router.navigate(['bookings'])

  }

  dateChanged(event: Event, isStart: boolean) {
    var val = (event.target as HTMLInputElement).value

    if(isStart) {
      this.booking.startDate = new Date(val)
    } else {
      this.booking.endDate = new Date(val)
    }
  }

}