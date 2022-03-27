import { IVisit } from './shared/visits.model';
import { Component, Input, OnInit } from '@angular/core';
import { VisitService } from './shared/visits.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'visit-details',
  templateUrl: './visit.details.component.html',
  styleUrls: ['./visit.details.component.css']
})
export class VisitDetailsComponent {
  visit!: IVisit;
  constructor(private visitService: VisitService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.visit = <IVisit>this.visitService.getVisit(+this.route.snapshot.params['id'])


  }



  }



