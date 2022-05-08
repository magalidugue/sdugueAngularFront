import { ActivatedRoute } from '@angular/router';
import { VisitService } from './shared/visits.service';
import { ISession, IVisit } from './shared/visits.model';
import { Component, Input } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';



@Component({
  selector: 'bookingForm',
  templateUrl: './bookingForm.component.html',
  styleUrls: ['./bookingForm.component.css']
})
export class BookingFormComponent {

  @Input() visit!: IVisit

  @Input() session!: ISession




  constructor(private visitService: VisitService, private route: ActivatedRoute, public matDialog: MatDialog) {

  }

  ngOnInit() {

    this.visit = <IVisit>this.visitService.getVisit(+this.route.snapshot.params['id']);

    //this.session = <ISession>this.visitService.getSession(+this.route.snapshot.params['id'])
  }


 bookingForm = new FormGroup ({
  firstName!: new FormControl(),
  lastName!: new FormControl(),
  phoneNumber!: new FormControl(),
  email!: new FormControl(),
  numberOfAdults: new FormControl(),
  numberOfKids: new FormControl(),
  otherVisitorsNames: new FormControl()
  })










}
