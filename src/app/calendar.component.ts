import {ISession, IVisit } from './shared/visits.model';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class Calendar {
  @Input() sessions!: ISession[]
  @Input() visit!: IVisit

  session!: ISession

  bookingMode!: boolean

  bookSession(el: HTMLElement, i: number) {
    this.session = this.sessions[i]
    this.bookingMode= true;
    el.scrollIntoView()
  }






}
