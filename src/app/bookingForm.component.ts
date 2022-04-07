import { Component } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'bookingForm',
  templateUrl: './bookingForm.component.html',
  styleUrls: ['./bookingForm.component.css']
})
export class BookingFormComponent {

  bookingForm!: FormGroup;
  firstname!: FormControl
  lastName!: FormControl
  phoneNumber!: FormControl
  email!: FormControl










}
