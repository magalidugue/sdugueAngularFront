import {ISession } from './shared/visits.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class Calendar {
  @Input() sessions!: ISession[]






}
