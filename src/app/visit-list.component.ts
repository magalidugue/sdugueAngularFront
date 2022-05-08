import { IVisit } from './shared/visits.model';
import { Component, Input, OnInit } from '@angular/core';
import { VisitService } from './shared/visits.service';


@Component({
  selector: 'visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit{

  visits!: IVisit[]

  constructor(private visitService: VisitService) {

  }

  ngOnInit() {
    this.visitService.getVisits().subscribe(visits => this.visits = visits)
  }


}
