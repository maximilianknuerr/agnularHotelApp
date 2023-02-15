import {Component} from '@angular/core';
import {Booking} from "../booking";

import {Router, ActivatedRoute} from "@angular/router";
import {BookingService} from "../booking.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private bookingService: BookingService,
              private formBuilder: FormBuilder
              ) {}

  booking: Booking = {
    id: 100,
    name: 'name',
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date()
  }

  bookingForm: FormGroup = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    roomNumber: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
  })

  ngOnInit(): void {
    if (this.router.url != "/create") {
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'))

      this.bookingService.getBookingByID(id).subscribe((result) => {
        this.booking = result


        this.bookingForm.setValue({
                  id: this.booking.id,
                  name: this.booking.name,
                  roomNumber: this.booking.roomNumber,
                  startDate: this.booking.startDate,
                  endDate: this.booking.endDate
                })
      })
    }

  }

  save(): void {

    this.booking.id = this.bookingForm.get('id')?.value
    this.booking.name = this.bookingForm.get('name')?.value
    this.booking.roomNumber = this.bookingForm.get('roomNumber')?.value
    this.booking.startDate = this.bookingForm.get('startDate')?.value
    this.booking.endDate = this.bookingForm.get('endDate')?.value





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
